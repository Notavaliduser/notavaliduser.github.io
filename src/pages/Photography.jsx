import maypoleRibbons from "../assets/photography/maypole-ribbons.jpg";
import nevisBungyBeetle from "../assets/photography/nevis-bungy-beetle.jpg";
import seagullDock from "../assets/photography/seagull-dock.jpg";
import bougainvilleaFence from "../assets/photography/bougainvillea-fence.jpg";
import monitorLizardPier from "../assets/photography/monitor-lizard-pier.jpg";
import boatWorkshop from "../assets/photography/boat-workshop.jpg";
import caveSilhouettes from "../assets/photography/cave-silhouettes.jpg";
import cityWindowsNight from "../assets/photography/city-windows-night.jpg";
import aerialRoundabout from "../assets/photography/aerial-roundabout.jpg";
import jerashColumns from "../assets/photography/jerash-columns.jpg";
import puppyPetra from "../assets/photography/puppy-petra.jpg";
import donkeysPetra from "../assets/photography/donkeys-petra.jpg";
import caterpillarLeaf from "../assets/photography/caterpillar-leaf.jpg";
import mothFabric from "../assets/photography/moth-fabric.jpg";
import purpleFlowerBokeh from "../assets/photography/purple-flower-bokeh.jpg";
import artInstallation from "../assets/photography/art-installation.jpg";

const photos = [
  { id: 1, src: caveSilhouettes, alt: "Silhouettes at a cave mouth, light streaming in" },
  { id: 2, src: jerashColumns, alt: "Roman columns at Jerash, Jordan" },
  { id: 3, src: monitorLizardPier, alt: "Monitor lizard on a wooden pier overlooking the sea" },
  { id: 4, src: donkeysPetra, alt: "Three donkeys at Petra, Jordan" },
  { id: 5, src: bougainvilleaFence, alt: "Bougainvillea spilling over a fence" },
  { id: 6, src: cityWindowsNight, alt: "City building windows glowing at night" },
  { id: 7, src: artInstallation, alt: "Figure in an immersive projected art installation" },
  { id: 8, src: maypoleRibbons, alt: "Maypole wrapped in colorful ribbons against the sky" },
  { id: 9, src: puppyPetra, alt: "Puppy looking up at the camera" },
  { id: 10, src: nevisBungyBeetle, alt: "VW Beetle at Nevis Bungy, New Zealand" },
  { id: 11, src: aerialRoundabout, alt: "Aerial view of a circular garden and blue taxis" },
  { id: 12, src: purpleFlowerBokeh, alt: "Purple flower on wooden surface, shallow depth of field" },
  { id: 13, src: caterpillarLeaf, alt: "Fuzzy caterpillar on a broad leaf" },
  { id: 14, src: seagullDock, alt: "Red-billed gull perched on a dock bollard" },
  { id: 15, src: boatWorkshop, alt: "Boat under construction on an island shore" },
  { id: 16, src: mothFabric, alt: "Moth resting on woven fabric, macro" },
];

export default function Photography() {
  return (
    <main className="collage-page">
      <section className="hero">
        <h1 className="hero-title">Photography</h1>
      </section>
      <div className="art-organic">
        {photos.map((item) => (
          <div key={item.id} className="art-piece">
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
      </div>
    </main>
  );
}
