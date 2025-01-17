const htmlTemplate = `
<!DOCTYPE html>
<html>
<head>
    <style>
        /* Global styles for email compatibility */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
            color: #333;
        }

        .logo {
            width: 36px;
            fill: white;
        }

        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            overflow: hidden;
        }

        .header {
            background-color: var(--primary, #ff7043);
            padding: 20px;
            text-align: center;
        }

        .header img {
            max-width: 150px;
            margin-bottom: 10px;
        }

        .header h1 {
            font-size: 24px;
            color: #ffffff;
            margin: 0;
        }

        .content {
            padding: 20px;
        }

        .content p {
            font-size: 16px;
            line-height: 1.6;
            margin-bottom: 20px;
        }

        .content a {
            text-decoration: none;
            color: var(--primary, #ff7043);
            font-weight: bold;
        }

        .footer {
            background-color: #f1f1f1;
            padding: 10px;
            text-align: center;
            font-size: 14px;
            color: #666;
        }

        .footer a {
            color: var(--primary, #ff7043);
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header Section -->
        <div class="header">
            <img src="https://adventurerguide.com/images/logo-white.svg" alt="Logo" class="logo">
            <h1>Thank You for Joining Our Waitlist!</h1>
        </div>

        <!-- Main Content Section -->
        <div class="content">
            <p>Hi there,</p>
            <p>
                We're thrilled to have you on board! You've successfully joined the waitlist for 
                <strong>Adventurer Guide</strong>. We're working hard to bring you something amazing.
            </p>
            <p>
                In the meantime, keep an eye on your inbox. We'll send you updates, announcements, and exclusive content 
                leading up to our launch.
            </p>
            <p>Thank you for your support!</p>
            <p>
                Best regards,<br>
                <strong>Adventurer Guide Team</strong>
            </p>
        </div>

        <!-- Footer Section -->
        <div class="footer">
            <p>&copy; 2024 Adventurer Guide. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export default htmlTemplate;
