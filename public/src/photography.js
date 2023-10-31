let imageInfo = [
  [
    "img06.png",
    "The top of a green onion plant."
  ],
  [
    "img02.png",
    "Looking down a white fence."
  ],
  [
    "img03.png",
    "Some rocks."
  ],
  [
    "img04.png",
    "The top of a small orange flower."
  ],
  [
    "img05.png",
    "A closeup of an unripe blackberry."
  ],
  [
    "img01.png",
    "Moss on landscaping fabric."
  ],
  [
    "img07.png",
    "Closeup of a small eggplant."
  ],
  [
    "img09.png",
    "Macro shot of a small evergreen plant."
  ],
  [
    "img08.png",
    "Small mushrooms surrounded by grass."
  ],
  [
    "img10.png",
    "Small feather in some grass."
  ],
  [
    "img11.png",
    "Rock surrounded by some grass-like plants."
  ],
  [
    "img12.png",
    "Orange flower closeup."
  ],
  [
    "img13.png",
    "Evergreen plant."
  ],
  [
    "img14.png",
    "Rock with swirly pattern on the face."
  ],
  [
    "img15.png",
    "Rock with striped pattern on it."
  ],
  [
    "img16.png",
    "Small succulent plant with rocks surrounding it."
  ],
  [
    "img17.png",
    "Moss and fungus growing on tree bark."
  ],
  [
    "img18.png",
    "Clover plant growing inside a brick."
  ],
  [
    "img19.png",
    "Purple flower."
  ],
  [
    "img20.png",
    "Budding red flowers."
  ],
  [
    "img21.png",
    "White, half-grown hydrangea flower."
  ],
  [
    "img22.png",
    "Macro of two-petaled blue flower."
  ],
  [
    "img23.png",
    "Closeup of a bean-like flower."
  ],
  [
    "img24.png",
    "Cracked yellow glass in the sun."
  ],
  [
    "img25.png",
    "Tomato in the shade."
  ],
  [
    "img27.png",
    "Sea shell on a cement brick."
  ],
  [
    "img26.png",
    "Closeup of shingles on a roof."
  ],
  [
    "img28.png",
    "Chicken with a golden head."
  ],
  [
    "img29.png",
    "Budding flower on a plant."
  ],
  [
    "img33.png",
    "Mulch with grass in the foreground."
  ],
  [
    "img34.png",
    "The side of a mailbox with a \"No Soliciting\" sign on it"
  ],
  [
    "img32.png",
    "A purple and yellow flower."
  ],
  [
    "img31.png",
    "A purple flower with a pink flower in the background."
  ],
  [
    "img37.png",
    "The top of a plant with a spider web on it."
  ],
  [
    "img38.png",
    'Brown leaves of a plant.'
  ],
  [
    "img39.png",
    "A purple leaf from a plant."
  ],
  [
    "img39.png",
    "A red, brown, and yellow rock on a wooden post"
  ],
  [
    "img30.png",
    "A close up of a climbing rope."
  ]
];

let output = "<table>";

for (let i = 0; i < imageInfo.length; i++) {
  if (i % 3 == 0) {
    if (i == 0) {
      output += "<tr>";
    } else {
      output += "</tr><tr>";
    }
  }

  output += `<td class="imageIcon"><a target="_blank" href="/img/photography/${imageInfo[i][0]}"><img src="/img/photography/small/${imageInfo[i][0]}"></a><div>${imageInfo[i][1]}</div></td>`;
}

output += "</tr></table>";
