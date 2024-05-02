import os
import requests
from bs4 import BeautifulSoup
import json

def main():
    headers = {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
    }
    url = "https://volley.ru/calendar/01H6XABKE6DZMV0NXGVB2Z0CK5/allgames"

    s = requests.Session()
    response = s.get(url=url, headers=headers)
    
    soup = BeautifulSoup(response.text, 'lxml')
    
    # Получаем первые 3 блока с классом ginfo__datetime
    date_matches = soup.select('.ginfo__datetime')[:5]
    
    # Получаем все нечетные блоки с классом ginfo-team__title до 10
    team_a_titles = soup.select('.ginfo-team__title')[:10]
    
    # Получаем первые 5 блоков с классом ginfo-team ginfo-team--a
    team_a_images = soup.select('.ginfo-team.ginfo-team--a')[:5]
    
    # Получаем первые 5 блоков с классом ginfo-team ginfo-team--b
    team_b_images = soup.select('.ginfo-team.ginfo-team--b')[:5]
    
    # Получаем ссылки с классом ginfo-card
    stream_links = [a['href'] for a in soup.select('a.ginfo-card')[:3]]  # Получаем только первые 3 ссылки
    
    data = {}
    
    for i, (date_match, team_a_title) in enumerate(zip(date_matches, team_a_titles), start=1):
        data[i] = {
            "date": date_match.text.strip(),
            "nameA": team_a_title.text.strip(),
        }
        
        if i in [1, 3, 5, 7, 9]:
            data[i]["nameB"] = team_a_titles[i].text.strip()
        elif i in [2, 4, 6, 8, 10]:
            data[i]["nameA"] = team_a_titles[i].text.strip()
    
    # Добавляем ссылки в словарь data под ключом 'stream' с индексами 1, 2, 3
    data['stream'] = {"first": stream_links[0], "secont": stream_links[1], "thri": stream_links[2]}
    
    # Определите путь к файлу volley_data.json внутри папки src
    file_path = os.path.join('src', 'volley_data.json')
    
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, ensure_ascii=False, indent=4)

if __name__ == '__main__':
    main()
