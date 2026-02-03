export interface Preset {
  name: string;
  description: string;
  code: string;
}

export const presets: Preset[] = [
  {
    name: "Gradient Waves",
    description: "Colorful gradient waves pattern",
    code: `Bitdepth 8
Width 512
Height 512

if c > 1
  if y > 256
    - Set 200
    if x > 256
      - Set 100
      - Set 50
  if x > 256
    - Gradient +50
    - N -20
if y > 256
  - W +30
  - Set 180`
  },
  {
    name: "Surma's Original",
    description: "The original JXL Art example by Surma",
    code: `Bitdepth 8
Orientation 7
RCT 6

if y > 150
  if c > 0
    - N 0
    if x > 500
      if WGH > 5
        - AvgN+NW +2
        - AvgN+NE -2
      if x > 470
        - AvgW+NW -2
        if WGH > 0
          - AvgN+NW +1
          - AvgN+NE -1
  if y > 136
    if c > 0
      if c > 1
        if x > 500
          - Set -20
          - Set 40
        if x > 501
          - W -1
          - Set 150
      if x > 500
        - N +5
        - N -15
    if W > -50
      - Weighted -1
      - Set 320`
  },
  {
    name: "Rainbow Diagonal",
    description: "Diagonal rainbow stripes",
    code: `Bitdepth 8
Width 512
Height 512
RCT 6

if c > 1
  - Set 128
if c > 0
  if x > 256
    - Gradient +1
    - N -1
  - W +2
- Gradient +1`
  },
  {
    name: "Plasma Effect",
    description: "Plasma-like color pattern",
    code: `Bitdepth 8
Width 256
Height 256

if c > 1
  if x > 128
    - W +3
    - N -2
  if y > 128
    - AvgW+N +5
    - Set 200
if c > 0
  if y > 128
    - Gradient +2
    - W -1
  - N +3
if x > 128
  - AvgN+NW +1
  - Set 100`
  },
  {
    name: "Checkerboard",
    description: "Simple checkerboard pattern",
    code: `Bitdepth 8
Width 512
Height 512

if c > 0
  - W 0
if x > 255
  if y > 255
    - Set 255
    - Set 0
  if y > 255
    - Set 0
    - Set 255
if y > 255
  - Set 255
  - Set 0`
  },
  {
    name: "Noise Pattern",
    description: "Pseudo-random noise using weighted predictor",
    code: `Bitdepth 8
Width 256
Height 256

if c > 0
  - W 0
if WGH > 0
  if N > 128
    - Weighted +50
    - Weighted -30
  if W > 128
    - Weighted -40
    - Weighted +60
- Set 128`
  },
  {
    name: "Concentric",
    description: "Concentric pattern using coordinates",
    code: `Bitdepth 8
Width 512
Height 512

if c > 1
  if x > 256
    if y > 256
      - Set 50
      - Set 150
    if y > 256
      - Set 200
      - Set 100
  - W +30
if c > 0
  - W -20
if x > 256
  - Gradient +1
  - N -1`
  },
  {
    name: "Minimalist",
    description: "Smallest interesting JXL art",
    code: `Bitdepth 8
Width 64
Height 64

if c > 0
  - W 0
- Gradient +1`
  },
  {
    name: "YCoCg Experiment",
    description: "Using YCoCg color transform",
    code: `Bitdepth 8
Width 512
Height 512
RCT 6

if c > 1
  - Set 0
if c > 0
  if x > 256
    - W +1
    - N -1
  - Set 128
if y > 256
  if x > 256
    - Gradient +2
    - Set 200
  - W +1`
  },
  {
    name: "Sierpinski-ish",
    description: "Fractal-like pattern",
    code: `Bitdepth 8
Width 512
Height 512

if c > 0
  - W 0
if x > 256
  if y > 256
    if W > 128
      - Set 0
      - Set 255
    if N > 128
      - Set 255
      - Set 0
  if W > 128
    - Set 255
    - Set 0
if y > 256
  if N > 128
    - Set 255
    - Set 0
  - Set 128`
  },
  {
    name: "Mandelbrot-ish",
    description: "Fractal-inspired pattern with color bands",
    code: `Bitdepth 8
Width 512
Height 512
RCT 6

if c > 1
  if x > 256
    if y > 128
      - Set 50
      - Set 200
    - Set 150
if c > 0
  if y > 256
    if x > 128
      - Gradient +3
      - N -2
    - W +1
  - Set 100
if x > 384
  if y > 384
    - Weighted +20
    - Set 180
  - Gradient -1`
  },
  {
    name: "Vaporwave",
    description: "Retro aesthetic gradient",
    code: `Bitdepth 8
Width 512
Height 256
RCT 6

if c > 1
  if y > 128
    - Set 200
    - Set 80
  - Gradient +2
if c > 0
  if y > 200
    - W +5
    - N -3
  - Set 150
if y > 128
  - AvgW+N +1
  - Set 255`
  },
  {
    name: "Grid Pattern",
    description: "Clean grid lines",
    code: `Bitdepth 8
Width 512
Height 512

if c > 0
  - W 0
if x > 63
  if x > 127
    if x > 191
      if x > 255
        if x > 319
          if x > 383
            if x > 447
              - Set 40
              - Set 255
            - Set 255
          - Set 40
        - Set 255
      - Set 40
    - Set 255
  - Set 40
if y > 63
  if y > 127
    if y > 191
      if y > 255
        if y > 319
          if y > 383
            if y > 447
              - N 0
              - Set 255
            - Set 255
          - N 0
        - Set 255
      - N 0
    - Set 255
  - N 0
- Set 40`
  },
  {
    name: "Fire",
    description: "Flame-like colors",
    code: `Bitdepth 8
Width 256
Height 256
RCT 6

if c > 1
  if y > 128
    - Set 0
    - Set 50
  - Weighted +10
if c > 0
  if y > 200
    - Set 200
    - N -5
  if y > 100
    - Gradient +3
    - Set 255
  - Set 128
if y > 180
  - W +20
  - Set 255`
  },
  {
    name: "Ocean Waves",
    description: "Blue wave pattern",
    code: `Bitdepth 8
Width 512
Height 256
RCT 6

if c > 1
  - Set 180
if c > 0
  if y > 128
    - Gradient +1
    - N -2
  - Set 80
if y > 200
  if x > 256
    - W +3
    - AvgW+N +1
  - Set 50`
  },
  {
    name: "XYB + Gaborish",
    description: "XYB with Gaborish/EPF and 16-bit buffers",
    code: `Bitdepth 8
Width 256
Height 256
Gaborish
16BitBuffers
XYB
XYBFactors 4096 512 256
EPF 2

if c > 1
  - Set 128
if c > 0
  if x > 128
    - Gradient +2
    - N -1
  - Set 200
if y > 128
  - W +1
  - Set 100`
  },
  {
    name: "Aurora Borealis",
    description: "Northern lights gradient waves",
    code: `Bitdepth 8
Width 512
Height 512
RCT 6

if c > 1
  if y > 256
    - Gradient +4
    - W -2
  - Set 40
if c > 0
  if x > 256
    if y > 384
      - N +3
      - Set 200
    - Weighted +2
    - Set 80
  if y > 128
    - Gradient +1
    - Set 150
  - Set 60
if y > 384
  if x > 256
    - Set 255
    - Gradient +3
  - W +2
  - N -1
if x > 128
  if y > 256
    - AvgW+N +2
    - Weighted -1
  - Gradient +1
  - Set 100
- Set 80`
  },
  {
    name: "Crystal Cave",
    description: "Geometric crystal patterns",
    code: `Bitdepth 8
Width 512
Height 512
RCT 17

if c > 1
  if x > 256
    - N +3
    - Set 80
  - Set 180
if c > 0
  if y > 256
    if x > 256
      - Gradient +4
      - W -2
    - Weighted +2
    - Set 100
  - N +1
  - Set 200
if x > 384
  if y > 384
    - Set 255
    - Set 0
  if y > 128
    - Gradient +2
    - W -1
  - Set 50
if y > 128
  if x > 128
    if W > 128
      - N +2
      - Gradient -1
    - AvgW+N +1
    - Set 150
  - W +1
  - Set 80
- Set 128`
  },
  {
    name: "Sunset Horizon",
    description: "Warm sunset color bands",
    code: `Bitdepth 8
Width 512
Height 256
RCT 6

if c > 1
  if y > 128
    - Set 60
    - Set 180
  - Set 220
if c > 0
  if y > 200
    - Gradient +2
    - Set 80
  if y > 100
    - W +1
    - Set 150
  - Set 200
if y > 200
  if x > 256
    - Gradient +3
    - W -2
  - N +1
  - Set 100
if y > 100
  if x > 128
    - AvgW+N +2
    - Weighted -1
  - Gradient +1
  - Set 180
- Set 255`
  },
  {
    name: "Digital Rain",
    description: "Matrix-style vertical patterns",
    code: `Bitdepth 8
Width 512
Height 512

if c > 0
  - W 0
if x > 480
  - Set 255
  - Gradient +2
if x > 32
  if y > 32
    if W > 128
      if N > 100
        - Set 200
        - Gradient -1
      - N +2
      - Set 80
    if y > 256
      - Gradient +3
      - W -1
    - Weighted +1
    - Set 100
  - Set 50
  - N +1
- Set 0`
  },
  {
    name: "Nebula Clouds",
    description: "Space nebula effect",
    code: `Bitdepth 8
Width 512
Height 512
RCT 6

if c > 1
  if y > 256
    if x > 256
      - Gradient +3
      - Set 100
    - W +2
    - Set 60
  - Set 180
if c > 0
  if x > 384
    - N +2
    - Set 200
  if x > 128
    - Gradient +1
    - Set 150
  - Set 80
if y > 384
  if x > 256
    - Set 255
    - Weighted +2
  - AvgW+N +1
  - Set 120
if x > 256
  if y > 128
    - Gradient +2
    - W -1
  - N +1
  - Set 100
- Set 60`
  },
  {
    name: "Tessellation",
    description: "Interlocking geometric tiles",
    code: `Bitdepth 8
Width 512
Height 512

if c > 0
  - W 0
if x > 256
  if y > 256
    if W > 128
      if N > 100
        - Gradient +3
        - Set 50
      - W +2
      - Set 200
    if W > 50
      - N +1
      - Gradient -1
    - Set 150
    - W -1
  if N > 128
    - Weighted +2
    - Set 100
  - AvgW+N +1
  - Set 80
if y > 128
  if W > 100
    - N +2
    - Gradient +1
  - Set 180
  - W -1
- Set 128`
  },
  {
    name: "Coral Reef",
    description: "Organic underwater patterns",
    code: `Bitdepth 8
Width 512
Height 512
RCT 6

if c > 1
  if x > 256
    - Set 180
    - Set 100
  - Set 220
if c > 0
  if y > 256
    - Gradient +3
    - W -2
  - N +2
  - Set 150
if y > 384
  if x > 384
    - Set 255
    - Gradient +2
  if x > 128
    - W +2
    - N -1
  - Set 80
  - Weighted +1
if x > 128
  if y > 128
    if W > 128
      - AvgW+N +2
      - Gradient -1
    - W +1
    - Set 200
  - N +1
  - Set 100
- Set 60`
  },
  {
    name: "Quantum Field",
    description: "Wave interference patterns",
    code: `Bitdepth 8
Width 512
Height 512

if c > 0
  - W 0
if x > 384
  if y > 384
    - Set 255
    - Gradient +3
  if y > 128
    - W +2
    - N -2
  - Set 50
if x > 128
  if y > 384
    - N +3
    - Set 200
  if y > 128
    if W > 128
      - Gradient +2
      - AvgW+N -1
    if N > 100
      - W +1
      - Set 180
    - Weighted +2
    - Set 100
  - Set 80
  - N +1
- Set 150`
  },
  {
    name: "Stained Glass",
    description: "Cathedral window effect",
    code: `Bitdepth 8
Width 512
Height 512
RCT 17

if c > 1
  if y > 256
    - W +3
    - Set 80
  - Set 200
if c > 0
  if x > 256
    if y > 256
      - Gradient +4
      - N -2
    - W +2
    - Set 150
  - Set 100
if x > 448
  if y > 256
    - Set 255
    - Gradient +2
  - N +1
  - Set 50
if y > 64
  if x > 64
    if W > 128
      - Gradient +2
      - Set 180
    if N > 100
      - W +1
      - AvgW+N -1
    - Weighted +2
    - Set 120
  - Set 80
  - N +1
- Set 150`
  },
  {
    name: "Volcanic",
    description: "Molten lava flow",
    code: `Bitdepth 8
Width 512
Height 512
RCT 6

if c > 1
  if y > 384
    - Set 20
    - Set 80
  - Set 40
if c > 0
  if y > 256
    - Gradient +2
    - Set 100
  - N +1
  - Set 200
if y > 448
  if x > 256
    - Set 255
    - Gradient +3
  - W +2
  - Set 220
if y > 256
  if x > 256
    if W > 128
      - Gradient +2
      - Set 150
    - N +1
    - W -1
  - AvgW+N +2
  - Set 180
if x > 128
  - Weighted +1
  - Set 100
- Set 80`
  }
];

export function getPresetByName(name: string): Preset | undefined {
  return presets.find(p => p.name === name);
}
