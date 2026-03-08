const SpotifyPlayer = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-xl overflow-hidden shadow-lg">
      <iframe
        style={{ borderRadius: "12px" }}
        src="https://open.spotify.com/embed/track/3oTuTpF1F3A7rEC6RKsMRz?utm_source=generator&theme=0"
        width="352"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Raindance by Dave ft. Tems"
      />
    </div>
  );
};

export default SpotifyPlayer;
