const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.textContent = isOpen ? "×" : "☰";
});

navigation.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menuButton.textContent = "☰";
  });
});

// DIEGO BILLS BEAUTY CARE
// WhatsApp Appointment Booking Integration

document.getElementById("booking-form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Replace with your business WhatsApp number
    const whatsappNumber = "233249028241";

    // Get customer information
    const name = document.getElementById("client-name").value.trim();
    const phone = document.getElementById("client-phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("appointment-date").value;
    const details = document.getElementById("message").value.trim();

    // Validate form
    if (!name || !phone || !service || !date) {
        document.getElementById("form-status").textContent =
            "Please fill in all required fields.";
        return;
    }

    // Format date
    const [year, month, day] = date.split("-");
    const formattedDate = `${day}/${month}/${year}`;

    // WhatsApp appointment message
    const whatsappMessage = `
 *DIEGO BILLz BEAUTY CARE* 

 *NEW APPOINTMENT REQUEST*

Hello Diego Billz Beauty Care,
I would like to book an appointment.

━━━━━━━━━━━━━━━━━━

 *CUSTOMER DETAILS*

*Name:* ${name}
*Phone:* ${phone}

━━━━━━━━━━━━━━━━━━

 *APPOINTMENT DETAILS*

*Service:* ${service}
*Preferred Date:* ${formattedDate}

━━━━━━━━━━━━━━━━━━

  *ADDITIONAL INFORMATION*

${details || "No additional details provided."}

━━━━━━━━━━━━━━━━━━

 Kindly confirm my appointment availability.

Thank you! 
`;

    // Encode WhatsApp message
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Update form status
    document.getElementById("form-status").textContent =
        "Opening WhatsApp to complete your appointment request...";

    // Open WhatsApp
    window.location.href = whatsappURL;
});
