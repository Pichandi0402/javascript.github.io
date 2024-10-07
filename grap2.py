import matplotlib.pyplot as plt

# Create a figure and an axis
fig, ax = plt.subplots()

# Draw a circle with a given radius
circle = plt.Circle((0.5, 0.5), 0.3, edgecolor='blue', facecolor='lightblue')

# Add the circle to the axis
ax.add_artist(circle)

# Inject text in the center of the circle
ax.text(0.5, 0.5, 'I LOVE PYTHON', fontsize=12, color='red',
        ha='center', va='center')

# Set the axis limits to make sure the circle is fully visible
ax.set_xlim(0, 1)
ax.set_ylim(0, 1)

# Remove the axes for a cleaner look
ax.set_xticks([])
ax.set_yticks([])
ax.set_aspect('equal')

# Show the plot
plt.show()