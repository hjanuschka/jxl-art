export const helpContent = `
<h2>What is JXL Art?</h2>
<p>
  <strong>JXL Art is the practice of using <a href="https://jpeg.org/jpegxl/">JPEG XL</a>'s prediction tree to generate art</strong>.
  If you have questions, join the <code>#jxl-art</code> channel on the <a href="https://discord.gg/DqkQgDRTFu">JPEG XL Discord</a>.
</p>

<p>
  JPEG XL has a modular mode that divides the image into squares called groups (up to 1024x1024 each).
  It uses a prediction tree to predict each pixel's value based on neighboring pixels and gradients.
  Only the <em>difference</em> between the actual image and prediction needs to be encoded.
</p>

<p>
  In JXL art, the error is always zero, so the image consists <em>only</em> of the prediction tree.
  The predictions generate the image. Creating JXL art means writing that prediction tree.
</p>

<h2>Header Options</h2>
<ul>
  <li><code>Width 1024</code> - Image width</li>
  <li><code>Height 1024</code> - Image height</li>
  <li><code>Bitdepth 8</code> - Bit depth (1-31)</li>
  <li><code>RCT 0</code> - Reversible Color Transform (0=RGB, 6=YCoCg, up to 42)</li>
  <li><code>Orientation 0-7</code> - Rotation/flip as per EXIF</li>
  <li><code>GroupShift 3</code> - Group size = 128 << value (0-3)</li>
  <li><code>Alpha</code> - Add alpha channel (c == 3)</li>
  <li><code>XYB</code> - Use XYB color space</li>
  <li><code>CbYCr</code> - Use YCbCr color space</li>
  <li><code>Squeeze</code> - Apply Squeeze transform</li>
  <li><code>FramePos X Y</code> - Frame position offset</li>
  <li><code>NotLast</code> - More layers follow (for multi-layer images)</li>
</ul>

<h2>Decision Nodes</h2>
<pre>if [property] > [value]
  (THEN branch)
  (ELSE branch)</pre>

<h3>Properties for conditions:</h3>
<ul>
  <li><code>c</code> - Channel (0=R, 1=G, 2=B, 3=A)</li>
  <li><code>g</code> - Group number</li>
  <li><code>x</code>, <code>y</code> - Coordinates</li>
  <li><code>N</code>, <code>W</code> - Pixel above / left</li>
  <li><code>|N|</code>, <code>|W|</code> - Absolute values</li>
  <li><code>NW</code>, <code>NE</code> - Diagonal neighbors</li>
  <li><code>W+N-NW</code> - Gradient predictor value</li>
  <li><code>W-NW</code>, <code>NW-N</code>, <code>N-NE</code> - Differences</li>
  <li><code>N-NN</code>, <code>W-WW</code> - Second-order differences</li>
  <li><code>WGH</code> - Weighted predictor error</li>
  <li><code>Prev</code>, <code>PPrev</code> - Previous channel values</li>
  <li><code>PrevErr</code>, <code>PPrevErr</code> - Previous channel errors</li>
</ul>

<h2>Leaf Nodes (Predictors)</h2>
<pre>- [predictor] +/- [offset]</pre>

<h3>Available predictors:</h3>
<ul>
  <li><code>Set</code> - Always 0, so offset becomes the value</li>
  <li><code>W</code>, <code>N</code>, <code>NW</code>, <code>NE</code>, <code>WW</code> - Neighbor values</li>
  <li><code>Select</code> - WebP lossless predictor</li>
  <li><code>Gradient</code> - W+N-NW, clamped</li>
  <li><code>Weighted</code> - Weighted sum of 4 subpredictors</li>
  <li><code>AvgW+N</code>, <code>AvgW+NW</code>, <code>AvgN+NW</code>, <code>AvgN+NE</code> - Averages</li>
  <li><code>AvgAll</code> - Weighted sum of multiple neighbors</li>
</ul>

<h2>Edge Cases</h2>
<ul>
  <li>At x=y=0: W=0. At x=0: W=N. At y=0: N=W</li>
  <li>NW falls back to W at edges</li>
  <li>NE, NN fall back to N; WW falls back to W</li>
</ul>

<h2>Keyboard Shortcuts</h2>
<ul>
  <li><code>Ctrl+Alt+Enter</code> - Run</li>
</ul>
`;
