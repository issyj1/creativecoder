
import {
  useRef,
  useState,
  useEffect
} from "react";

import { featuredImages } from "../data/featuredImages";

export default function FeaturedPage() {
  const trackRef = useRef(null);

  const autoScrollRef = useRef(null);
  const userScrollingRef = useRef(false);
  const resumeTimeoutRef = useRef(null);

  /*
    GET GALLERY PATH
  */
  const getGalleryPath = (link) => {
    if (!link) {
      return {
        prefix: "",
        name: ""
      };
    }

    const cleanLink = link.replace(/^\/+/, "");
    const parts = cleanLink.split("/");

    return {
      prefix: parts[0] || "",
      name: parts[1] || ""
    };
  };

  /*
    FIRST GALLERY PATH
  */
  const firstPath =
    featuredImages.length > 0
      ? getGalleryPath(
          featuredImages[0].link
        )
      : {
          prefix: "",
          name: ""
        };

  const [typedPrefix, setTypedPrefix] =
    useState(firstPath.prefix);

  const [typedName, setTypedName] =
    useState(firstPath.name);

  const [lastIndex, setLastIndex] =
    useState(0);

  /*
    MOBILE AUTO SCROLL

    Very slow movement on mobile.
    Stops when the user touches/swipes.
    Starts again after the user stops.
  */
  useEffect(() => {
    const scrollElement = trackRef.current;

    if (!scrollElement) return;

    const mediaQuery =
      window.matchMedia(
        "(max-width: 768px)"
      );

    if (!mediaQuery.matches) return;

    let lastTime = null;

    const autoScroll = (time) => {
      if (!lastTime) {
        lastTime = time;
      }

      const delta =
        time - lastTime;

      lastTime = time;

      if (!userScrollingRef.current) {
        scrollElement.scrollLeft +=
          delta * 0.015;
      }

      autoScrollRef.current =
        requestAnimationFrame(
          autoScroll
        );
    };

    autoScrollRef.current =
      requestAnimationFrame(
        autoScroll
      );

    /*
      Pause automatic movement when
      the user interacts with the gallery.
    */
    const pauseAutoScroll = () => {
      userScrollingRef.current = true;

      clearTimeout(
        resumeTimeoutRef.current
      );

      /*
        Slowly give control back to
        the automatic movement.
      */
      resumeTimeoutRef.current =
        setTimeout(() => {
          userScrollingRef.current = false;
        }, 1800);
    };

    scrollElement.addEventListener(
      "touchstart",
      pauseAutoScroll,
      { passive: true }
    );

    scrollElement.addEventListener(
      "wheel",
      pauseAutoScroll,
      { passive: true }
    );

    return () => {
      cancelAnimationFrame(
        autoScrollRef.current
      );

      clearTimeout(
        resumeTimeoutRef.current
      );

      scrollElement.removeEventListener(
        "touchstart",
        pauseAutoScroll
      );

      scrollElement.removeEventListener(
        "wheel",
        pauseAutoScroll
      );
    };
  }, []);

  /*
    TYPEWRITER EFFECT
  */
  const typeText = (
    prefix,
    name
  ) => {
    setTypedPrefix("");
    setTypedName("");

    let prefixIndex = 0;
    let nameIndex = 0;

    const prefixSpeed = 35;
    const nameSpeed = 45;

    const typePrefix = () => {
      if (
        prefixIndex <
        prefix.length
      ) {
        setTypedPrefix(
          prefix.slice(
            0,
            prefixIndex + 1
          )
        );

        prefixIndex++;

        setTimeout(
          typePrefix,
          prefixSpeed
        );
      } else {
        typeName();
      }
    };

    const typeName = () => {
      if (
        nameIndex <
        name.length
      ) {
        setTypedName(
          name.slice(
            0,
            nameIndex + 1
          )
        );

        nameIndex++;

        setTimeout(
          typeName,
          nameSpeed
        );
      }
    };

    typePrefix();
  };

  /*
    UPDATE PATH AT BOTTOM
  */
  const updateGalleryPath = (
    index
  ) => {
    const image =
      featuredImages[index];

    if (
      !image ||
      !image.link
    ) {
      return;
    }

    const path =
      getGalleryPath(
        image.link
      );

    typeText(
      path.prefix,
      path.name
    );
  };

  /*
    HORIZONTAL SCROLL
  */
  const handleScroll = () => {
    const scrollElement =
      trackRef.current;

    if (!scrollElement) {
      return;
    }

    const scrollLeft =
      scrollElement.scrollLeft;

    const items =
      scrollElement.querySelectorAll(
        ".featured-item"
      );

    /*
      DIFFERENT SCROLL SPEEDS
    */
    items.forEach((item) => {
      const speed =
        parseFloat(
          item.dataset.speed
        ) || 1;

      item.style.transform =
        `translateX(${
          scrollLeft *
          (speed - 1) *
          0.12
        }px)`;
    });

    /*
      FIND IMAGE CLOSEST
      TO LEFT SIDE
    */
    let closestItem = null;
    let closestDistance =
      Infinity;

    items.forEach((item) => {
      const rect =
        item.getBoundingClientRect();

      const distance =
        Math.abs(
          rect.left - 150
        );

      if (
        distance <
        closestDistance
      ) {
        closestDistance =
          distance;

        closestItem = item;
      }
    });

    /*
      UPDATE PATH
    */
    if (closestItem) {
      const index =
        Array.from(items).indexOf(
          closestItem
        );

      if (
        index !== lastIndex
      ) {
        setLastIndex(index);

        updateGalleryPath(
          index
        );
      }
    }
  };

  /*
    CREATE GALLERY URL

    /gallery/things

    becomes:

    #/gallery/things

    So the browser URL becomes:

    https://www.isabellejohnsonphoto.com/#/gallery/things
  */
  const getGalleryUrl = (
    link
  ) => {
    if (!link) {
      return "#";
    }

    const cleanLink =
      link.replace(/^\/+/, "");

    return `#/${cleanLink}`;
  };

  /*
    RENDER
  */
  return (
    <main className="featured-page">

      <div
        className="featured-scroll"
        ref={trackRef}
        onScroll={handleScroll}
      >

        <div className="featured-track">

          {featuredImages.map(
            (image, index) => (
              <div
                key={index}
                className={`featured-item featured-item-${index + 1}`}
                data-speed={
                  [
                    0.75,
                    1.15,
                    0.9,
                    1.25,
                    0.82,
                    1.08,
                    0.88
                  ][index] || 1
                }
              >

                <a
                  href={getGalleryUrl(
                    image.link
                  )}
                >
                  <img
                    src={image.src}
                    alt=""
                  />
                </a>

              </div>
            )
          )}

        </div>

      </div>

      <div
        className="hover-path"
        id="gallery-path"
      >

        <span className="path-prefix">
          {typedPrefix}
        </span>

        {typedPrefix && (
          <span className="path-slash">
            /
          </span>
        )}

        <span className="path-name">
          {typedName}
        </span>

      </div>

    </main>
  );
}
