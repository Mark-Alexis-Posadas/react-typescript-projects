import React, { useState, useEffect, useRef } from "react";
import ThemeItem from "../../components/ThemeItem";

const data = [
  {
    id: 1,
    bgColor: "bg-green-600",
  },
  {
    id: 2,
    bgColor: "bg-purple-600",
  },
  {
    id: 3,
    bgColor: "bg-yellow-600",
  },
  {
    id: 4,
    bgColor: "bg-red-600",
  },
  {
    id: 5,
    bgColor: "bg-blue-600",
  },
  {
    id: 6,
    bgColor: "bg-pink-600",
  },
  {
    id: 7,
    bgColor: "bg-teal-600",
  },
  {
    id: 8,
    bgColor: "bg-indigo-600",
  },
  {
    id: 9,
    bgColor: "bg-black",
  },
  {
    id: 10,
    bgColor: "bg-white",
  },
];

const Theme: React.FC = () => {
  const [theme, setTheme] = useState<string>(
    () => localStorage.getItem("theme") || data[0].bgColor
  );
  const [chooseTheme, setChooseTheme] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (themeColor: string) => {
    setTheme(themeColor);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setChooseTheme(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative">
      <div className={`w-full min-h-screen ${theme}`}>
        <header>
          <h1>Welcome to [Your Company Name]</h1>
          <p>
            <strong>Discover [Your Company Name]:</strong> Your one-stop
            solution for [describe your services/products]. Whether you're
            looking to [briefly mention key services], or [highlight another key
            service], we're here to help.
          </p>
        </header>

        <section className="section">
          <h2>Why Choose Us?</h2>
          <ul>
            <li>
              <strong>Quality:</strong> We pride ourselves on delivering
              top-notch [products/services].
            </li>
            <li>
              <strong>Experience:</strong> With [number] years of experience, we
              understand your needs.
            </li>
            <li>
              <strong>Customer Satisfaction:</strong> Our customers love us!
              Read their <a href="[link to testimonials]">testimonials</a>.
            </li>
          </ul>
        </section>

        <section className="section services">
          <h2>Our Services</h2>
          <ul>
            <li>Service/Feature 1: Brief description or key benefit.</li>
            <li>Service/Feature 2: Brief description or key benefit.</li>
            <li>Service/Feature 3: Brief description or key benefit.</li>
          </ul>
        </section>

        <section className="section products">
          <h2>Our Products</h2>
          <ul>
            <li>Product 1: Brief description or key feature.</li>
            <li>Product 2: Brief description or key feature.</li>
            <li>Product 3: Brief description or key feature.</li>
          </ul>
        </section>

        <section className="section">
          <h2>Why [Your Company Name]?</h2>
          <ul>
            <li>
              <strong>We Listen:</strong> Your satisfaction is our priority.
            </li>
            <li>
              <strong>Custom Solutions:</strong> Tailored to fit your unique
              needs.
            </li>
            <li>
              <strong>Expert Team:</strong> Meet the professionals behind [Your
              Company Name].
            </li>
          </ul>
        </section>

        <section className="section">
          <h2>Get in Touch</h2>
          <p>
            Ready to take the next step? Contact us today to discuss how we can
            assist you in [achieving a specific goal or solving a problem].
          </p>
        </section>

        <section className="section">
          <h2>Follow Us</h2>
          <p>Stay updated with our latest news and offers:</p>
          Social media icons with links
        </section>

        <section className="section">
          <h2>Visit Us</h2>
          <p>[Address or location details, if applicable]</p>
        </section>

        <section className="section">
          <h2>Call to Action</h2>
          <p>
            Explore our website to learn more about [Your Company Name] and what
            we can do for you!
          </p>
        </section>
      </div>
      <div className="absolute top-5 right-5 flex flex-col items-end" ref={ref}>
        <button
          className="text-white bg-black p-2 rounded"
          onClick={() => setChooseTheme((prev) => !prev)}
        >
          Choose theme
        </button>
        {chooseTheme && (
          <div className="bg-slate-700 p-2 rounded shadow-md flex items-center mt-3">
            {data.map((item) => (
              <ThemeItem
                item={item}
                key={item.id}
                handleClick={handleClick}
                theme={theme}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Theme;
