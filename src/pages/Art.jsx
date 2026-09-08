import floralShield from "../assets/art/floral-shield.jpg";
import abstractDuality from "../assets/art/abstract-duality.jpg";
import organicAbstract from "../assets/art/organic-abstract.jpg";
import greenHand from "../assets/art/green-hand.jpg";
import twoHands from "../assets/art/two-hands.jpg";

const artworks = [
  { id: 1, src: organicAbstract, alt: "Dense organic abstract — ink on paper" },
  { id: 2, src: floralShield, alt: "Floral shield — ink botanical illustration" },
  { id: 3, src: abstractDuality, alt: "Abstract ink duality — organic swirls and geometric shards" },
  { id: 4, src: greenHand, alt: "Green hand study — colored pencil" },
  { id: 5, src: twoHands, alt: "Two hands — mechanical and human, colored pencil" },
];

export default function Art() {
  return (
    <main className="collage-page">
      <section className="hero">
        <h1 className="hero-title">Art</h1>
      </section>
      <div className="art-organic">
        {artworks.map((item) => (
          <div key={item.id} className="art-piece">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </main>
  );
}
