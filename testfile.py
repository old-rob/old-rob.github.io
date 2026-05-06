import requests
from bs4 import BeautifulSoup

def fetch_and_print_grid(doc_url):
    response = requests.get(doc_url)
    response.raise_for_status()
    
    soup = BeautifulSoup(response.text, 'html.parser')

    rows = soup.find_all('tr')[1:]

    points = []
    for row in rows:
        cols = row.find_all('td')
        if len(cols) >= 3:
            x = int(cols[0].text.strip())
            char = cols[1].text.strip()
            y = int(cols[2].text.strip())
            points.append((x, y, char))

    max_x = max(p[0] for p in points)
    max_y = max(p[1] for p in points)

    # init grid with spaces
    grid = [[' ' for _ in range(max_x + 1)] for _ in range(max_y + 1)]

    # fill grid
    for x, y, char in points:
        grid[y][x] = char  # y is row, x is column

    for row in grid:
        print(''.join(row))

if __name__ == "__main__":
    doc_url = "https://docs.google.com/document/d/e/2PACX-1vTER-wL5E8YC9pxDx43gk8eIds59GtUUk4nJo_ZWagbnrH0NFvMXIw6VWFLpf5tWTZIT9P9oLIoFJ6A/pub"
    fetch_and_print_grid(doc_url)
