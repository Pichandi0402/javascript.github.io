import matplotlib.pyplot as plt
import matplotlib.patches as patches
import matplotlib.image as mpimg

# Load the image
img = mpimg.imread('siva.png')

# Create a figure and axis
fig, ax = plt.subplots()

# Draw a circle
circle = patches.Circle((0.5, 0.5), 0.4, edgecolor='blue', facecolor='none', linewidth=2)

# Add the circle to the axis
ax.add_patch(circle)

# Add the image inside the circle
ax.imshow(img, extent=(0.1, 0.9, 0.1, 0.9), clip_path=circle, clip_on=True)

# Set the axis limits
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)
ax.text(0.5, 0.5, 'I LOVE PYTHON', fontsize=12, color='red',
        ha='center', va='center')
# Remove the axes for a cleaner look
ax.set_xticks([])
ax.set_yticks([])
ax.set_aspect('equal')

# Show the plot
plt.show()