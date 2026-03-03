declare module "react-simple-maps" {
  import { ReactNode, CSSProperties, MouseEvent } from "react";

  export interface ComposableMapProps {
    projection?: string;
    projectionConfig?: Record<string, unknown>;
    style?: CSSProperties;
    children?: ReactNode;
  }

  export interface GeographiesProps {
    geography: string | object;
    children: (props: { geographies: Geography[] }) => ReactNode;
  }

  export interface Geography {
    rsmKey: string;
    id: string;
    properties: Record<string, unknown>;
  }

  export interface GeographyProps {
    geography: Geography;
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    style?: { default?: CSSProperties; hover?: CSSProperties; pressed?: CSSProperties };
    onMouseEnter?: (evt: MouseEvent<SVGPathElement>) => void;
    onMouseLeave?: (evt: MouseEvent<SVGPathElement>) => void;
    onClick?: (evt: MouseEvent<SVGPathElement>) => void;
    key?: string;
  }

  export function ComposableMap(props: ComposableMapProps): JSX.Element;
  export function Geographies(props: GeographiesProps): JSX.Element;
  export function Geography(props: GeographyProps): JSX.Element;
}
