import { useEffect, useState } from "react";

const LOREM = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi consectetur nisi, eu consectetur nisl nisi euismod nisi.`;

function getParagraphs(count: number) {
  return Array.from({ length: count }, (_, i) => (
    <p key={i} style={{ marginBottom: 16 }}>
      {LOREM.repeat(3)}
    </p>
  ));
}

function Loading() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        left: 0,
        top: 0,
        zIndex: 9999,
        opacity: 0.7,
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: "8px solid #fff",
            borderTop: "8px solid #888",
            borderRadius: "50%",
            width: 60,
            height: 60,
            animation: "spin 1s linear infinite",
          }}
        />
        <style>{`@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }`}</style>
      </div>
    </div>
  );
}

function LazyLoadComp() {
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (loading) return;
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;
      const scrollHeight = document.body.scrollHeight;
      if (scrollY + innerHeight >= scrollHeight - 100) {
        setLoading(true);
        setTimeout(() => {
          setVisibleCount((prev) => (prev < 100 ? prev + 10 : prev));
          setLoading(false);
        }, 800);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div style={{ padding: 24 }}>
      {getParagraphs(visibleCount)}
      {loading && <Loading />}
    </div>
  );
}

export default LazyLoadComp;
