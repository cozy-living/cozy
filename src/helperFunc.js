export const displayText = (data) => {
    switch (data) {
        case "PENDING":
            return "Pending";
        case "COMPLETED":
            return "Completed";
        case "room_reservation":
            return "Common Room Reservation";
        case "maintenance":
            return "Condo Maintenance";
        default:
            return data;
    }
}

export const selectImage = (data) => {
    switch (data) {
        case "room_reservation":
            return "common_room.jpeg";
        case "maintenance":
            return "maintenance.jpeg";
        default:
            return data;
    }
}