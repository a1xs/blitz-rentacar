#!/bin/bash
# Script to download car images from the existing website

# Create a list of image URLs from https://blitz-rentacar.alle.bg/
# These are the original images from the current site

echo "Downloading car images..."

# Car 1: Opel Astra Bertone Cabrio
curl -o images/cars/opel-astra/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/d7d77e7d1a0b-c999999999/mybe9whk49zbuga1z10gihqlbs.jpeg"

# Car 2: Mitsubishi Lancer 9 Wagon
curl -o images/cars/mitsubishi-lancer/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/6a79f393e045-c999999999/3t8eg18e1v772ha1z10dkyj7zg.jpg"

# Car 3: Mitsubishi Colt Hatchback
curl -o images/cars/mitsubishi-colt/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/e21ef46908e1-c999999999/vqfe3wo6ysxbuga1z10kou6up8.jpg"

# Car 4: Mazda 323F
curl -o images/cars/mazda-323f/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/d65a250d735d-c999999999/ltxewatnlzxbuga1z107uni46h.jpg"

# Car 5: Honda Civic Hatchback
curl -o images/cars/honda-civic/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/eedaff8f4f38-c999999999/74keikhdocybuga1z10i4x50t1.jpg"

# Car 6: Mitsubishi Space Star
curl -o images/cars/mitsubishi-space-star/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/cbf70cbeaab9-c999999999/ja5e3p5lehybuga1z109rzwubf.jpg"

# Car 7: Toyota Yaris Verso
curl -o images/cars/toyota-yaris-verso/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/e87043c8110f-w4000-c999999999/54cetkk7kwfrrha4nfm6w1k.jpg"

# Car 8: Subaru Justy
curl -o images/cars/subaru-justy/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/5f9ec0c999ea-c999999999/d5pektrfqnybuga1z1071ke4f9.jpg"

# Car 9: Toyota Prius Hybrid
curl -o images/cars/toyota-prius/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/0b30277e6826-c999999999/ba8eye3myyybuga1z10v0vkk4q.jpg"

# Car 10: Toyota Prius Hybrid (Black)
curl -o images/cars/toyota-prius-black/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/6d452ce117de-c999999999/2oxewhbfs0zbuga1z106au7g4p.jpg"

# Car 11: Honda Jazz (Green)
curl -o images/cars/honda-jazz-green/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/b0097c1341e9-c999999999/8cxef4vvfrybuga1z10aehsj0a.jpg"

# Car 12: Honda Jazz (Pink)
curl -o images/cars/honda-jazz-pink/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/5f4a87e55b58-c999999999/ipxentru7tybuga1z10vshzkmq.jpg"

# Car 13: Honda Jazz (Blue)
curl -o images/cars/honda-jazz-blue/1.jpg "https://cdn5.amcn.in/a/blitz-rentacar.alle.bg/assets/c1412ce40f2c-c999999999/y4lelzu6bab0bha1z4lpwh8tv.jpg"

echo "Done! All car images downloaded."
echo ""
echo "Note: These are placeholder images from the current site."
echo "You can add 2-3 more photos for each car in the respective folders."
