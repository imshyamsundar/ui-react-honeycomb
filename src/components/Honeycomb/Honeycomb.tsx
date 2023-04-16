import React from 'react';
import './styles/Honeycomb.css';

interface items {
  image: string;
  link: {
    href?: string|null;
    target?: string|null;
  }
  text: string;
}

interface HoneycombProps {
  props: items[]
}

const Honeycomb = ({ props }: HoneycombProps) => {

  return (
    <div className='honeycombOuter'>
      <ul className="honeycomb">
        {
          props && props.length > 0 && props.map((cell: any, index: number) => {
            return (
              <li key={index} className="honeycomb-cell">
                <a href={cell.link.href ? cell.link.href : ""} target={cell.link.target ? cell.link.target : ""}>
                  <img className="honeycomb-cell_image"
                    src={cell.image} />
                  <div className="honeycomb-cell_title">{cell.text}</div>
                </a>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Honeycomb;
