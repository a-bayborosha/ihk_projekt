import React from "react";
import classes from "./Image.module.css";
//import mapImg from "./../../img/map.jpg";
import L from "leaflet";

export default class Image extends React.Component {
  componentDidMount() {
    // create the slippy map
    const map = L.map("image-map", {
      minZoom: 1,
      maxZoom: 4,
      center: [0, 0],
      zoom: 1,
      crs: L.CRS.Simple,
    });

    // size of the image
    const w = 7665,
      h = 4305,
      url = "https://i.ibb.co/gjLWnLw/map.jpg";

    // calculate the edges of the image, in coordinate space
    const southWest = map.unproject([0, h], map.getMaxZoom() - 1);
    const northEast = map.unproject([w, 0], map.getMaxZoom() - 1);
    const bounds = new L.LatLngBounds(southWest, northEast);

    // add the image overlay,
    // so that it covers the entire map
    L.imageOverlay(url, bounds).addTo(map);

    // tell leaflet that the map is exactly as big as the image
    map.setMaxBounds(bounds);
  }
  render() {
    return <div className={classes.Image} id="image-map"></div>;
  }
}
