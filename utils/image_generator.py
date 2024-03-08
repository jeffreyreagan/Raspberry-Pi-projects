# image_generator.py
#pip install Pillow
from PIL import Image, ImageDraw
import io
import random

def generate_random_color():
    return (random.randint(0, 255), random.randint(0, 255), random.randint(0, 255))

def generate_random_image(width, height):
    image = Image.new("RGB", (width, height), "white")
    draw = ImageDraw.Draw(image)

    for _ in range(random.randint(50, 200)):
        x1 = random.randint(0, width)
        y1 = random.randint(0, height)
        x2 = random.randint(0, width)
        y2 = random.randint(0, height)

        color = generate_random_color()
        draw.line([(x1, y1), (x2, y2)], fill=color, width=random.randint(1, 5))

    return image

def get_random_image_io():
    width, height = 400, 300
    random_image = generate_random_image(width, height)
    img_io = io.BytesIO()
    random_image.save(img_io, 'PNG')
    img_io.seek(0)
    return img_io
