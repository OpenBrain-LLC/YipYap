import requests
import re
import random
import time
import json

def scrape_youtube_fast(query):
    formatted_query = query.replace(' ', '+') + "+official"
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

def generate_massive_database(target_count=3000):
    topics = {
        "Anime_Animation": [
            "History of anime documentary", "Official anime opening themes", "Voice acting behind the scenes anime",
            "Evolution of mecha", "Makoto Shinkai background art", "Pokemon official episodes", "one peace anime",
            "Crunchyroll official trailers", "How manga is printed", "Animation frame by frame process"
        ],
        "Science_Tech": [
            "James Webb Telescope images", "How AI works explained", "Boston Dynamics robots",
            "Quantum computing basics", "Veritasium physics", "Mark Rober engineering",
            "Evolution of smartphones", "Cybersecurity tips", "Future of Green Energy",
            "How microchips are made", "Nanotechnology applications", "3D printing time lapse"
        ],
        "Nature_Travel": [
            "National Geographic wildlife", "4K Scenic drone footage", "Great Barrier Reef diving",
            "Travel guide Japan", "Swiss Alps hiking", "African Safari animals",
            "Deep sea exploration", "Northern Lights time lapse", "Grand Canyon tour",
            "Antarctica documentary", "Volcano eruption drone footage", "Amazon rainforest survival"
        ],
        "Culture_Education": [
            "TED Ed riddles", "Kurzgesagt in a nutshell", "Ancient Rome documentary",
            "How to play piano for beginners", "Art history masterpieces", "Language learning tips",
            "Architecture design tour", "History of money", "Philosophy for beginners", "TED Ed",
            "Psychology of habits", "World War II timeline", "Mythology stories animated"
        ],
        "Sports_Fitness": [
            "NBA best plays", "World Cup goals", "Olympic track highlights",
            "10 minute morning stretch", "History of the Super Bowl", "Skateboarding pro tricks",
            "Yoga for beginners", "Tennis grand slam points", "Calisthenics workout routine",
            "Marathon training tips", "Surfing big waves"
        ],
        "Coding_Programming": [
            "Python tutorial for beginners", "How the internet works", "HTML CSS basics",
            "Game development unity", "Machine learning crash course", "Linux terminal basics",
            "Building a PC step by step", "History of Microsoft", "Open source software explained"
        ],
        "Movies_Cinema": [
            "Behind the scenes VFX", "How movie sound effects are made", "Film scoring orchestra",
            "History of animation", "Cinematography techniques", "Stop motion animation process",
            "Props making tutorial", "Director commentary classics", "Evolution of CGI"
        ],
        "Food_Culinary": [
            "Baking sourdough bread", "History of pizza", "Traditional Japanese street food",
            "Michelin star chef cooking", "Science of cooking chemistry", "Knife skills tutorial",
            "Chocolate making process", "Coffee roasting explained", "World's hottest peppers"
        ],
        "Automotive_Transport": [
            "How car engines work", "Bullet trains of the world",
            "Electric vehicle technology", "Restoring classic cars", "How airplanes are built",
            "Submarine interior tour", "Helicopter flight mechanics", "Bicycle manufacturing process"
        ],
        "DIY_Crafting": [
            "Woodworking epoxy resin", "Forging a sword blacksmithing", "Glassblowing process",
            "Restoring rusty old tools", "Pottery wheel throwing", "Leather crafting tutorial",
            "Origami advanced folding", "Building a terrarium", "Home renovation time lapse"
        ]
    }

    search_list = []
    for category in topics:
        search_list.extend(topics[category])
    
    random.shuffle(search_list)
    all_ids = []
    
    print(f"🚀 Starting Global Scraper (Target: {target_count} videos)...")
    
    for topic in search_list:
        print(f"🔍 Category Search: '{topic}'...")
        batch = scrape_youtube_fast(topic)
        all_ids.extend(batch)
        
        unique_ids = list(dict.fromkeys(all_ids))
        print(f"✅ Unique IDs: {len(unique_ids)}")
        
        if len(unique_ids) >= target_count:
            print("🎯 Target reached!")
            break
            
        time.sleep(random.uniform(1.5, 3.0))
        
    final_list = unique_ids[:target_count]
    return final_list

def save_to_js(yt_ids):
    filename = "data.js"
    with open(filename, "w") as file:
        file.write(f"const yt_ids = {json.dumps(yt_ids)};\n")
    print(f"💾 Saved {len(yt_ids)} IDs to '{filename}'!")

if __name__ == "__main__":
    data = generate_massive_database(target_count=5000)
    save_to_js(data)