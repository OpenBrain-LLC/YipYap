import requests
import re
import random
import time
import json

def scrape_youtube_fast(query):
    formatted_query = query.replace(' ', '+') + "+-official+-trailer+-movie+-vevo+-espn+-fifa"
    url = f"https://www.youtube.com/results?search_query={formatted_query}&sp=EgIQAQ%253D%253D"
    
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
        print(f"⚠️ Error fetching {query}: {e}")
        return []

def generate_massive_database(target_count=10000):
    topics = {
        "Animated_Learning": [
            "kurzgesagt in a nutshell space", "ted ed riddles animated", "oversimplified history full",
            "cgpgrey mind bending concepts", "infographics show survival", "ted ed mythology stories",
            "kurzgesagt human body immunology", "animated paradoxes explained", "history of the world map animation",
            "science experiments animated explainers", "how things work 3d animation", "ted ed psychology facts"
        ],
        "Anime_Aesthetic_And_Art": [
            "lofi hip hop radio anime loop", "how to draw anime characters pro", "studio ghibli background art process",
            "anime piano cover synthia", "history of anime documentary indie", "manga artist studio tour",
            "how japanese animation is made", "anime lore explained deep dive", "relaxing anime scenery 4k",
            "making an anime opening independent", "digital art speedpaint anime style", "voice acting behind the scenes dub"
        ],
        "Mind_Blowing_Science": [
            "mark rober crazy engineering", "vsauce mind blowing facts", "veritasium physics illusions",
            "smarter every day slow motion", "stuff made here inventions", "action lab science experiments",
            "black holes explained visually", "quantum physics for beginners", "deep ocean creatures footage",
            "microscope zoom into everyday objects", "nilered chemistry experiments", "time travel theories explained"
        ],
        "Tech_And_Gadgets": [
            "building the ultimate gaming pc", "restoring destroyed retro consoles", "smartphone durability test",
            "how artificial intelligence actually works", "3d printing insane objects", "coding a game in 24 hours",
            "history of nintendo consoles", "teardown of modern gadgets", "raspberry pi cool projects",
            "evolution of video game graphics", "making a robot dog at home", "cybersecurity hacker explained"
        ],
        "Science_Education": [
            "how the universe works documentary independent", "physics concepts explained visually", 
            "chemistry experiments at home", "biology microscopic footage", "how engines work animation",
            "mathematics visual proofs", "space exploration timeline", "deep sea creatures facts",
            "quantum mechanics for beginners", "volcano eruption science", "human body anatomy 3d",
            "how black holes work", "psychology concepts explained", "history of the periodic table"
        ],
        "Tech_Gadgets": [
            "building a custom pc guide", "history of early internet", "how microchips are manufactured",
            "smartphone teardown independent", "coding python for absolute beginners", "raspberry pi projects",
            "3d printing timelapse compilation", "home automation smart tech setup", "cybersecurity basics tutorial",
            "evolution of computer graphics", "keyboard building ASMR", "retro tech restoration"
        ],
        "Nature_Wildlife": [
            "forest walking tour 4k", "birds of paradise mating dance", "amazon rainforest ambient",
            "ocean waves relaxing 4k", "macro photography insects", "time lapse plant growth",
            "national park drone footage amateur", "underwater diving coral reef vlog", "mountain climbing gopro",
            "desert survival skills", "camping in heavy rain ASMR", "wildlife trail camera compilation"
        ],
        "Art_Design": [
            "acrylic painting tutorial landscape", "digital art procreate process", "sketching basics for beginners",
            "pottery wheel making a mug", "woodcarving ASMR", "calligraphy practice techniques",
            "graphic design logo process", "origami step by step guide", "watercolor techniques",
            "street art graffiti timelapse", "sculpting with clay tutorial", "interior design basics"
        ],
        "DIY_Crafting": [
            "woodworking making a table", "restoring rusty tools", "leather crafting wallet",
            "epoxy resin project ideas", "sewing a shirt from scratch", "blacksmithing forging a knife",
            "home renovation diy vlog", "building a terrarium", "making candles at home",
            "bookbinding process", "knitting a scarf tutorial", "upcycling old clothes"
        ],
        "Food_Cooking": [
            "street food walking tour asia", "how to bake sourdough bread", "making pasta from scratch",
            "knife skills chopping techniques", "coffee latte art tutorial", "korean bbq cooking vlog",
            "science of baking cookies", "meal prep ideas for the week", "traditional pizza making",
            "cake decorating compilation", "vegan recipe tutorials", "fermenting vegetables at home"
        ],
        "History_Geography": [
            "ancient rome life explained", "map animation world history", "history of trade routes",
            "medieval castle architecture", "how language evolved", "geography of the himalayas",
            "historical fashion changes", "viking ships documentary independent", "history of money and currency",
            "flags of the world explained", "abandoned places exploration", "timeline of earth history"
        ],
        "Fitness_Health": [
            "15 minute morning stretch routine", "bodyweight workout at home no equipment", "yoga for beginners",
            "posture correction exercises", "calisthenics progression guide", "marathon training vlog",
            "mobility routine for flexibility", "jump rope tricks tutorial", "kettlebell workout basics",
            "core strength exercises", "meditation breathing techniques", "hiking trail vlog"
        ],
        "Travel_Exploration": [
            "walking tour tokyo 4k no talking", "backpacking europe tips", "train journey through swiss alps",
            "van life build tour", "packing a suitcase efficiently", "street view of venice",
            "traveling on a budget vlog", "road trip across america", "exploring local markets vlog",
            "temple tour southeast asia", "winter cabin trip vlog", "cycling across the country"
        ],
        "Music_Audio": [
            "lofi hip hop beat making process", "how to play piano chords", "acoustic guitar fingerpicking",
            "music theory explained simply", "synthesizer sound design tutorial", "drum cover independent",
            "violin practice routine", "building a custom guitar", "audio mixing basics",
            "ASMR no talking triggers", "ambient space music background", "history of jazz music"
        ]
    }

    search_list = []
    modifiers = [""]
    
    for category in topics:
        for topic in topics[category]:
            for mod in modifiers:
                search_list.append(topic + mod)
    
    random.shuffle(search_list)
    all_ids = []
    
    print(f"🚀 Starting Global Scraper (Target: {target_count} videos)...")
    print(f"📚 Total search queries generated: {len(search_list)}")
    
    for idx, topic in enumerate(search_list):
        if idx % 1 == 0:
            print(f"🔍 Progress: Searching '{topic}'... ({len(dict.fromkeys(all_ids))} unique IDs so far)")
            
        batch = scrape_youtube_fast(topic)
        all_ids.extend(batch)
        unique_ids = list(dict.fromkeys(all_ids))
        
        if len(unique_ids) >= target_count:
            print(f"🎯 Target of {target_count} reached!")
            unique_ids = unique_ids[:target_count]
            break

        time.sleep(random.uniform(1.0, 2.5))
        
    return list(dict.fromkeys(all_ids))[:target_count]

def save_to_js(yt_ids):
    filename = "data.js"
    with open(filename, "w") as file:
        file.write(f"const yt_ids = {json.dumps(yt_ids)};\n")
    print(f"💾 Saved {len(yt_ids)} IDs to '{filename}'!")

if __name__ == "__main__":
    data = generate_massive_database(target_count=5000)
    save_to_js(data)