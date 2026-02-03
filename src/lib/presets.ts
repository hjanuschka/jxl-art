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
    - Gradient + 50
    - N - 20
if y > 256
  - W + 30
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
        - AvgN+NW + 2
        - AvgN+NE - 2
      if x > 470
        - AvgW+NW -2
        if WGH > 0
          - AvgN+NW +1
          - AvgN+NE - 1
  if y > 136
    if c > 0
      if c > 1
        if x > 500
          - Set -20
          - Set 40
        if x > 501
          - W - 1
          - Set 150
      if x > 500
        - N + 5
        - N - 15
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
  if x > y
    - Gradient + 1
    - Gradient - 1
  - W + 2
- Gradient + 1`
  },
  {
    name: "Plasma Effect",
    description: "Plasma-like color pattern",
    code: `Bitdepth 8
Width 256
Height 256

if c > 1
  if x > 128
    - W + 3
    - N - 2
  if y > 128
    - AvgW+N + 5
    - Set 200
if c > 0
  if y > x
    - Gradient + 2
    - W - 1
  - N + 3
if x > y
  - AvgN+NW + 1
  - Set 100`
  },
  {
    name: "Checkerboard",
    description: "Simple checkerboard pattern",
    code: `Bitdepth 8
Width 512
Height 512

if c > 0
  - Prev 0
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
  - Prev 0
if WGH > 0
  if N > 128
    - Weighted + 50
    - Weighted - 30
  if W > 128
    - Weighted - 40
    - Weighted + 60
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
  - Prev + 30
if c > 0
  - Prev - 20
if x > y
  - Gradient + 1
  - N - 1`
  },
  {
    name: "Minimalist",
    description: "Smallest interesting JXL art",
    code: `Bitdepth 8
Width 64
Height 64

if c > 0
  - Prev 0
- Gradient + 1`
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
  if x > y
    - W + 1
    - N - 1
  - Set 128
if y > 256
  if x > 256
    - Gradient + 2
    - Set 200
  - W + 1`
  },
  {
    name: "Sierpinski-ish",
    description: "Fractal-like pattern",
    code: `Bitdepth 8
Width 512
Height 512

if c > 0
  - Prev 0
if x > 256
  if y > 256
    if W > 128
      - Set 0
      - Set 255
    if N > 128
      - Set 255
      - Set 0
  if W > N
    - Set 255
    - Set 0
if y > 256
  if N > W
    - Set 255
    - Set 0
  - Set 128`
  }
];

export function getPresetByName(name: string): Preset | undefined {
  return presets.find(p => p.name === name);
}
