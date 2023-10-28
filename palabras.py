import requests
from bs4 import BeautifulSoup

# URL base
url_base = 'https://www.diccionariodedudas.com/palabras-empiecen-{}-con-5-letras/'

# Lista para almacenar las palabras
palabras_con_5_letras = []

# Iterar desde la letra 'A' hasta 'Z'
for letra in range(65, 91):  # Códigos ASCII de 'A' a 'Z'
    letra_actual = chr(letra)  # Convierte el código ASCII en letra
    url = url_base.format(letra_actual)  # Construye la URL con la letra

    # Realizar la solicitud HTTP
    response = requests.get(url)
    
    # Verificar si la solicitud fue exitosa
    if response.status_code == 200:
        # Analizar el contenido HTML
        soup = BeautifulSoup(response.text, 'html.parser')
        # Encontrar todas las palabras con 5 letras
        palabras = soup.find_all('li', class_='list-group-item')
        # Agregar las palabras a la lista
        palabras_con_5_letras.extend([palabra.text for palabra in palabras])

# Guardar las palabras en un archivo de texto
with open('palabras.txt', 'w') as archivo:
    archivo.write('\n'.join(palabras_con_5_letras))
