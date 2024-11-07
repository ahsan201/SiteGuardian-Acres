<script>
    // Function to update the dashboard title
    function updateDashboardTitle(location) {
        const dashboardTitle = document.getElementById("dashboard-title");
        dashboardTitle.textContent = `${location} Dashboard`;
    }

    // Add event listeners to each location link
    document.querySelectorAll("#locationDropdown a").forEach(locationLink => {
        locationLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent actual navigation
            const locationName = this.textContent;
            updateDashboardTitle(locationName);
        });
    });
</script>

