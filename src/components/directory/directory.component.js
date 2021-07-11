import React from "react";

import "./directory.style.scss";
import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          id: 1,
          title: "Hats",
          imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
          linkUrl: "hats",
        },

        {
          id: 2,
          title: "Sneakers",
          imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
          linkUrl: "sneakers",
        },
        {
          id: 3,
          title: "Clothing",
          imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
          linkUrl: "clothing",
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
