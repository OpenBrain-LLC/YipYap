import requests
import re
import random
import time
import json

def scrape_youtube_fast(query):
    neg = "+-official+-trailer+-movie+-vevo+-espn+-news+-netflix+-disney+-nba+-fifa+-game+-gaming+-playthrough+-walkthrough"
    url = f"https://www.youtube.com/results?search_query={query.replace(' ', '+')}{neg}&sp=EgIQAQ%253D%253D"
    
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Accept-Language": "en-US,en;q=0.9"
    }
    
    try:
        response = requests.get(url, headers=headers, timeout=10)
        response.raise_for_status()
        raw_ids = re.findall(r'"videoId":"([a-zA-Z0-9_-]{11})"', response.text)
        return list(dict.fromkeys(raw_ids))
    except Exception as e:
        print(f"⚠️ Error on '{query}': {e}")
        return []

def generate_massive_database(target_count=5000):
    pillars = {
        "Animated_Education": [
            "infographics animation", "kurzgesagt style science", "history animated documentary", 
            "how it works animation", "biology visual journey", "space exploration animation",
            "physics thought experiments", "psychology lessons animated", "ancient civilizations animation",
            "evolution of earth animated", "microscopic world animation", "engineering marvels 3d"
        ],
        "Internet_Culture": [
            "unexpected memes", "perfectly cut screams", "discord memes", "rare aesthetic", 
            "liminal spaces", "vine energy", "trollface incident", "distorted audio", 
            "cursed images", "internet rabbit holes", "weird core", "dreamcore", 
            "brainrot compilation", "sigma edits", "ironic memes", "deep fried videos",
            "analog horror", "lost media documentaries", "backrooms footage"
        ],
        "Vlogs_Lifestyle": [
            "day in the life", "weekly vlog", "thrift haul", "what is in my bag", 
            "room tour", "moving vlog", "night routine", "cleaning my room", 
            "spending 100 dollars", "gas station snacks", "car camping", "van life",
            "productive morning", "getting my life together", "unboxing haul",
            "study with me 1 hour", "clothing haul 2026", "mini vlog aesthetic"
        ],
        "Animals": [
            "capybara", "orange cat behavior", "golden retriever logic", "monkey chaos", 
            "raccoon eating", "hamster pov", "birb memes", "shiba inu", "funny goats",
            "animals being derps", "tiny kittens", "fat seals", "otter moments",
            "crow intelligence", "deep sea fish", "owl turning head", "baby pandas"
        ],
        "Satisfying": [
            "hydraulic press", "power washing", "kinetic sand", "restoring tools", 
            "crushing things", "soap carving", "ice cracking", "carpet cleaning", 
            "factory machines", "paint mixing", "slime asmr", "woodturning",
            "laser cleaning", "magnet fishing", "domino toppling", "pool cleaning",
            "restoring old paintings", "blackhead removal asmr", "sand art"
        ],
        "Food": [
            "street food tour", "exotic fruits", "wild cooking", "guilty pleasure snacks", 
            "giant food", "convenience store haul", "baking fails", "fast food hacks", 
            "lunch box packing", "100 year old rations", "tasting international candy",
            "cooking in a dorm", "cheap meals vs expensive", "street food asia",
            "pizza oven building", "coffee brewing techniques", "asmr mukbang no talking"
        ],
        "Tech_Web": [
            "setup tour", "weird gadgets", "mechanical keyboard", "retro tech", 
            "customizing phone", "sleeper pc", "wish shopping spree", "internet nostalgia", 
            "old windows sounds", "3d printing", "desk setup aesthetic", "cracking screens",
            "old apple products", "cracking open hard drives", "custom pc water cooling"
        ],
        "People_Social": [
            "street interviews", "asking strangers songs", "public pranks", "social experiment", 
            "blind dating", "guessing jobs", "complimenting strangers", "talent show",
            "public karaoke", "culture exchange", "spending 24 hours in", "hide and seek",
            "giving money to strangers", "scaring friends", "argument in public prank"
        ],
        "Creative_DIY": [
            "acrylic pouring", "life hacks", "drawing tutorial", "diy decor", 
            "upcycling clothes", "pottery", "origami", "sketchbook tour", 
            "photography tips", "magic tricks", "tie dye tutorial", "custom sneakers",
            "building a treehouse", "carved wood art", "leather working"
        ]
    }

    all_queries = []
    for cat in pillars:
        all_queries.extend(pillars[cat])
    
    random.shuffle(all_queries)
    all_ids = []
    
    print(f"🚀 Scraping for {target_count} IDs (Total Queries: {len(all_queries)})...")
    for query in all_queries:
        batch = scrape_youtube_fast(query)
        all_ids.extend(batch)

        unique_ids = list(dict.fromkeys(all_ids))
        print(f"[{len(unique_ids)}/{target_count}] Found from: {query}")
        if len(unique_ids) >= target_count:
            break

        time.sleep(random.uniform(1.1, 2.2))
    return unique_ids[:target_count]

def save_to_js(yt_ids):
    with open("data.js", "w") as f:
        f.write(f"const yt_ids = {json.dumps(yt_ids)};\n")
        
    print(f"💾 Done! {len(yt_ids)} IDs saved.")

if __name__ == "__main__":
    data = generate_massive_database(target_count=5000)
    save_to_js(data)