#!/usr/bin/env python3
"""
scraper.py — scrape YouTube Shorts for a list of queries and/or videos
             and write them all to video.json

The list lives in QUERIES below. Every entry may be:

  * a search query           -> "cats", "funny dogs"
  * a YouTube URL            -> "https://www.youtube.com/shorts/VIDEOID"
                                "https://youtu.be/VIDEOID"
                                "https://www.youtube.com/watch?v=VIDEOID"
  * a bare 11-char video id  -> "dQw4w9WgXcQ"
       (checked with oEmbed first; if it isn't a real video the entry
        is treated as a search query instead)

Usage:
    python scraper.py                   # uses QUERIES below
    python scraper.py "cats" "dogs" 30  # ad-hoc entries + per-query limit
"""

import json
import re
import sys
import time
import urllib.parse
import requests

# ---------------------------------------------------------------- config
QUERIES: list = [
    # --- Animals & pets ---
    "funny cats",
    "cute kittens",
    "cats being cats",
    "funny dogs",
    "cute puppies",
    "dogs being dogs",
    "puppy videos",
    "dog training",
    "cat training",
    "pet birds",
    "parrot talking",
    "funny parrots",
    "pet reptiles",
    "snake videos",
    "lizard videos",
    "turtle videos",
    "fish aquarium",
    "betta fish",
    "horses",
    "horse riding",
    "farm animals",
    "baby animals",
    "wildlife",
    "animal rescues",
    "animal facts",
    "service dogs",
    "guide dogs",
    "police dogs",
    "military dogs",
    "cats vs dogs",
    "pet fails",
    "pet compilation",
    "animal compilation",

    # --- Funny & memes ---
    "funny videos",
    "funny shorts",
    "try not to laugh",
    "funny fails",
    "fail compilation",
    "instant karma",
    "caught on camera",
    "funny moments",
    "memes",
    "dank memes",
    "funny memes",
    "cat memes",
    "dog memes",
    "animal memes",
    "school memes",
    "work memes",
    "gaming memes",
    "relatable memes",
    "comedy skits",
    "stand up comedy",
    "pranks",
    "funny pranks",
    "public pranks",
    "social experiments",
    "awkward moments",
    "cringe",
    "cringe compilation",
    "roast",
    "roasts",
    "insults",
    "comebacks",
    "dad jokes",
    "punny jokes",
    "jokes",
    "standup",
    "comedy",
    "sketch comedy",
    "impressions",
    "celebrity impressions",
    "voice acting",

    # --- Satisfying & ASMR ---
    "oddly satisfying",
    "satisfying video",
    "satisfying compilation",
    "asmr",
    "asmr eating",
    "asmr no talking",
    "asmr sounds",
    "slime",
    "slime videos",
    "kinetic sand",
    "soap cutting",
    "glass cutting",
    "hydraulic press",
    "crushing things",
    "power washing",
    "pressure washing",
    "rug cleaning",
    "car detailing",
    "house cleaning",
    "cleaning hacks",
    "restoration",
    "rust removal",
    "tool restoration",
    "knife restoration",
    "furniture restoration",
    "car restoration",
    "old things restored",
    "satisfying repairs",
    "woodworking",
    "blacksmithing",
    "welding",
    "metalworking",
    "pottery",
    "glass blowing",
    "resin art",
    "painting",
    "drawing",
    "digital art",
    "calligraphy",
    "sculpting",
    "3d printing",
    "laser cutting",
    "cnc",
    "diy",
    "diy crafts",
    "life hacks",
    "5 minute crafts",
    "kitchen hacks",
    "home hacks",
    "organization",
    "declutter",
    "minimalism",
    "home decor",
    "interior design",
    "diy furniture",
    "woodworking projects",

    # --- Food & cooking ---
    "cooking",
    "easy recipes",
    "quick recipes",
    "dinner ideas",
    "breakfast ideas",
    "lunch ideas",
    "meal prep",
    "healthy recipes",
    "vegan recipes",
    "keto recipes",
    "baking",
    "cake decorating",
    "dessert recipes",
    "chocolate",
    "candy making",
    "street food",
    "food review",
    "mukbang",
    "chef",
    "grilling",
    "bbq",
    "smoker",
    "pizza",
    "burger",
    "tacos",
    "sushi",
    "ramen",
    "pasta",
    "coffee",
    "latte art",
    "cocktails",
    "bartender",
    "mixology",
    "whiskey",
    "wine",
    "beer",
    "food facts",
    "kitchen gadgets",
    "kitchen tools",

    # --- Fitness & sports ---
    "fitness",
    "workout",
    "home workout",
    "gym",
    "gym motivation",
    "bodybuilding",
    "powerlifting",
    "calisthenics",
    "crossfit",
    "yoga",
    "pilates",
    "stretching",
    "mobility",
    "running",
    "marathon",
    "sprinting",
    "cycling",
    "swimming",
    "boxing",
    "mma",
    "muay thai",
    "bjj",
    "wrestling",
    "self defense",
    "karate",
    "taekwondo",
    "kung fu",
    "parkour",
    "gymnastics",
    "cheerleading",
    "dance",
    "hip hop dance",
    "breakdance",
    "ballet",
    "salsa",
    "bachata",
    "tango",
    "line dance",
    "country dance",
    "contortion",
    "flexibility",
    "handstands",
    "football",
    "soccer",
    "basketball",
    "baseball",
    "tennis",
    "golf",
    "cricket",
    "rugby",
    "hockey",
    "volleyball",
    "badminton",
    "table tennis",
    "pickleball",
    "skateboarding",
    "snowboarding",
    "skiing",
    "bmx",
    "motocross",
    "racing",
    "formula 1",
    "nascar",
    "drift",
    "drag race",
    "car meet",

    # --- Cars, tech & gaming ---
    "car review",
    "car repair",
    "engine swap",
    "motorcycle",
    "dirt bike",
    "atv",
    "truck",
    "offroad",
    "overlanding",
    "van life",
    "rv life",
    "supercars",
    "luxury cars",
    "electric cars",
    "tesla",
    "car fails",
    "dashcam",
    "driving",
    "gaming",
    "gaming clips",
    "funny gaming",
    "gaming fails",
    "gaming moments",
    "esports",
    "streamer",
    "twitch",
    "minecraft",
    "roblox",
    "fortnite",
    "call of duty",
    "gta",
    "valorant",
    "league of legends",
    "dota",
    "csgo",
    "apex legends",
    "overwatch",
    "pubg",
    "free fire",
    "mobile legends",
    "clash royale",
    "pokemon",
    "zelda",
    "mario",
    "sonic",
    "speedrun",
    "tech reviews",
    "iphone tips",
    "android tips",
    "ai tools",
    "chatgpt",
    "coding",
    "programming",
    "python",
    "javascript",
    "web development",
    "app development",
    "game development",
    "unity",
    "unreal engine",
    "excel tips",
    "photoshop",
    "video editing",
    "camera tricks",
    "photography",
    "drones",
    "rc cars",
    "robotics",
    "arduino",
    "raspberry pi",
    "electronics",

    # --- Motivation, money & life ---
    "motivation",
    "motivational speech",
    "self improvement",
    "productivity",
    "study motivation",
    "success",
    "business",
    "entrepreneur",
    "side hustle",
    "passive income",
    "investing",
    "stocks",
    "crypto",
    "real estate",
    "money tips",
    "budgeting",
    "saving money",
    "frugal living",
    "financial freedom",
    "career advice",
    "job interview",
    "resume tips",
    "public speaking",
    "communication skills",
    "body language",
    "psychology",
    "stoicism",
    "philosophy",
    "life advice",
    "dating advice",
    "relationship advice",
    "marriage",
    "parenting",
    "baby",
    "kids",
    "family",
    "mental health",
    "meditation",
    "mindfulness",
    "sleep",
    "health tips",
    "skincare",
    "makeup",
    "hair",
    "fashion",
    "outfits",
    "thrift",
    "sneakers",
    "streetwear",
    "luxury",
    "watches",
    "jewelry",
    "nails",
    "tattoos",
    "home remedies",
    "first aid",
    "survival",
    "prepping",
    "camping",
    "hiking",
    "backpacking",
    "fishing",
    "fly fishing",
    "ice fishing",
    "hunting",
    "archery",
    "shooting",
    "knife making",
    "bushcraft",
    "foraging",
    "gardening",
    "hydroponics",
    "aquaponics",
    "beekeeping",
    "chickens",
    "goats",
    "cows",
    "farm",
    "tractors",
    "heavy equipment",
    "construction",
    "demolition",
    "excavator",
    "crane",
    "bulldozer",
    "monster trucks",

    # --- Science, facts & education ---
    "science",
    "science experiments",
    "chemistry",
    "physics",
    "biology",
    "math",
    "history",
    "geography",
    "facts",
    "did you know",
    "trivia",
    "riddles",
    "brain teasers",
    "optical illusions",
    "magic tricks",
    "card tricks",
    "coin tricks",
    "juggling",
    "rubik's cube",
    "puzzles",
    "space",
    "space facts",
    "ocean",
    "nature",
    "weather",
    "language learning",
    "english lessons",
    "spanish lessons",
    "math tricks",
    "study tips",
    "how to",
    "tutorials",
    "repair",
    "tips and tricks",
]

LIMIT = 50          # max videos per search query
SLEEP = 1.0         # seconds between requests (be polite)

HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/124.0 Safari/537.36"
    ),
    "Accept-Language": "en-US,en;q=0.9",
}

VIDEO_ID_RE = re.compile(r"^[A-Za-z0-9_-]{11}$")
URL_ID_RE = re.compile(
    r"(?:v=|/shorts/|/embed/|/live/|youtu\.be/)([A-Za-z0-9_-]{11})"
)


# ---------------------------------------------------------------- fetch
def fetch(url):
    r = requests.get(url, headers=HEADERS, timeout=20)
    r.raise_for_status()
    return r.text


# ---------------------------------------------------------------- ytInitialData
def extract_json(html):
    """Find ytInitialData with brace matching (more reliable than regex)."""
    markers = [
        'var ytInitialData = ',
        'ytInitialData"]] = ',
        'window["ytInitialData"] = ',
    ]
    for marker in markers:
        idx = html.find(marker)
        if idx == -1:
            continue
        start = html.find("{", idx)
        if start == -1:
            continue

        depth = 0
        in_str = False
        esc = False
        for i in range(start, len(html)):
            c = html[i]
            if in_str:
                if esc:
                    esc = False
                elif c == "\\":
                    esc = True
                elif c == '"':
                    in_str = False
            else:
                if c == '"':
                    in_str = True
                elif c == "{":
                    depth += 1
                elif c == "}":
                    depth -= 1
                    if depth == 0:
                        try:
                            return json.loads(html[start : i + 1])
                        except json.JSONDecodeError:
                            break
    return None


def walk(obj, key):
    """Recursively yield every value stored under `key`."""
    if isinstance(obj, dict):
        if key in obj:
            yield obj[key]
        for v in obj.values():
            yield from walk(v, key)
    elif isinstance(obj, list):
        for item in obj:
            yield from walk(item, key)


# ---------------------------------------------------------------- parse
def extract_videos(data):
    videos = []
    seen = set()

    # --- Shorts lockup (modern shorts result) ---
    for item in walk(data, "shortsLockupViewModel"):
        try:
            vid = item["onTap"]["innertubeCommand"]["reelWatchEndpoint"]["videoId"]
        except (KeyError, TypeError):
            continue
        if vid in seen:
            continue
        seen.add(vid)

        title = ""
        try:
            title = item["overlayMetadata"]["primaryText"]["content"]
        except (KeyError, TypeError):
            pass

        videos.append({
            "id": vid,
            "title": title,
            "channel": "",
            "thumbnail": f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg",
        })

    # --- Regular videoRenderer (fallback) ---
    for item in walk(data, "videoRenderer"):
        vid = item.get("videoId")
        if not vid or vid in seen:
            continue
        seen.add(vid)

        title = ""
        try:
            title = item["title"]["runs"][0]["text"]
        except (KeyError, IndexError, TypeError):
            pass

        channel = ""
        try:
            channel = item["ownerText"]["runs"][0]["text"]
        except (KeyError, IndexError, TypeError):
            pass

        thumb = f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg"
        try:
            thumb = item["thumbnail"]["thumbnails"][-1]["url"]
        except (KeyError, IndexError, TypeError):
            pass

        videos.append({
            "id": vid,
            "title": title,
            "channel": channel,
            "thumbnail": thumb,
        })

    return videos


# ---------------------------------------------------------------- video refs
def parse_video_ref(entry):
    """Return a candidate video id for `entry`, or None if it's not one."""
    entry = entry.strip()
    m = URL_ID_RE.search(entry)
    if m:
        return m.group(1)
    if VIDEO_ID_RE.match(entry):
        return entry          # maybe an id — verified later via oEmbed
    return None


def fetch_video(vid):
    """Return a video dict for `vid`, or None if it isn't a real video."""
    url = (
        "https://www.youtube.com/oembed"
        f"?url=https://www.youtube.com/watch?v={vid}&format=json"
    )
    try:
        r = requests.get(url, headers=HEADERS, timeout=20)
        if r.status_code != 200:
            return None
        j = r.json()
    except (requests.RequestException, ValueError):
        return None

    return {
        "id": vid,
        "title": j.get("title", ""),
        "channel": j.get("author_name", ""),
        "thumbnail": f"https://i.ytimg.com/vi/{vid}/hqdefault.jpg",
    }


# ---------------------------------------------------------------- search
def search(query, limit):
    """Scrape Shorts for `query`; fall back to a plain search if empty."""
    q = urllib.parse.quote(query)

    # sp=EgIYAQ%3D%3D is YouTube's "Shorts only" filter
    url = f"https://www.youtube.com/results?search_query={q}&sp=EgIYAQ%3D%3D"
    print(f"  searching: {url}")
    data = extract_json(fetch(url))
    videos = extract_videos(data) if data else []

    if not videos:
        print("  no Shorts found, falling back to regular video search…")
        url = f"https://www.youtube.com/results?search_query={q}"
        data = extract_json(fetch(url))
        videos = extract_videos(data) if data else []

    return videos[:limit]


# ---------------------------------------------------------------- main
def main():
    argv = sys.argv[1:]

    limit = LIMIT
    if argv and argv[-1].isdigit():
        limit = int(argv[-1])
        argv = argv[:-1]

    entries = argv or QUERIES
    if isinstance(entries, str):
        entries = [entries]

    all_videos = []
    seen = set()

    for entry in entries:
        entry = str(entry).strip()
        if not entry:
            continue

        batch = []
        vid = parse_video_ref(entry)

        if vid:
            print(f"Video: {vid}")
            video = fetch_video(vid)
            if video:
                batch = [video]
            else:
                print("  not a video, treating as a search query…")
                batch = search(entry, limit)
        else:
            print(f"Query: {entry}")
            batch = search(entry, limit)

        for v in batch:
            if v["id"] in seen:
                continue
            seen.add(v["id"])
            v["query"] = entry      # which entry produced it
            all_videos.append(v)

        time.sleep(SLEEP)

    if not all_videos:
        print("No videos found.")
        sys.exit(1)

    with open("video.json", "w", encoding="utf-8") as f:
        json.dump(all_videos, f, indent=2, ensure_ascii=False)

    print(f"Wrote {len(all_videos)} videos to video.json")


if __name__ == "__main__":
    main()