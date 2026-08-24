4.8 GUI Design
This section presents the visual design of the SoPup application through wireframes and a
screen graph, showing both the layout of individual screens and the navigation flow
between them. The designs are based on the user workflows identified in the Use Case
diagrams, ensuring that all core functional requirements are supported.
4.8.1 Wireframes
Each wireframe illustrates the layout, key interface components, and primary content for a
specific screen. The designs follow Apple’s Human Interface Guidelines (HIG) and use
consistent visual elements across the app. Refer to link below to begin exploring the
SoPup prototype:
• Puppy mode prototype
• Social mode prototype
Wireframes1: Authentication & Onboarding Flow
This flow covers the user’s first interaction with SoPup, account creation or login, followed
by the onboarding process, where initial dog details are collected.
Wireframes:
• Login / Register: Allows new and returning users to access the platform.
• Onboarding: Sequential screens for entering dog name, breed, gender, health
status, and age.
• Mode Assignment: Based on age, users are assigned to Puppy Mode (<12 weeks)
or Social Mode (≥12 weeks).
Figure 4.8.1a: Authentication & Onboarding Flow
7SENG013W Software Development Project 2024/2025 82
Wireframes2: Homepage and Filter feature
The Homepage serves as the primary discovery hub for matching potential playmates. At
the top, a banner headline introduces the app’s purpose, encouraging users to browse
profiles that best match their dog’s personality and play style.
Homepage Layout:
• Filter Summary Bar: Displays current filter settings (e.g., distance, gender, play
style, environment, trigger, health status). Users can quickly review or adjust their
preferences.
• Profile Cards: Each card contains the dog’s name, location, gender, age, breed,
and weight, along with distance from the user. Behavioural and environmental tags
(e.g., “Chaser,” “Explorer,” “Home/Garden”) provide quick insights into compatibility.
• Visual Mode Indicator: Puppy Mode profiles appear in blue, while Social Mode
profiles appear in orange, helping users instantly distinguish between interaction
modes.
• Quick Action Button: A prominent plus (“+”) icon allows sending a match request
directly from the card.
Filter Feature:
Accessed via the filter icon, this feature enables granular search refinement:
• Distance Slider: Adjusts the search radius from the user’s location.
• General Filters: Gender, health status (verified/unverified), and neutered status.
• Pet Behaviour Filters: Includes play style (e.g., “Chaser,” “Gentle Player,”
“Mouthy”) and environmental preferences.
• Interface Design: Uses toggle-style selection buttons for quick multi-option input,
with a clear “back” option to exit without changes and a “confirm” button to apply
filters instantly.
This combination of a visually rich homepage and an intuitive filter panel ensures that
users can both browse broadly and narrow down matches efficiently, aligning with the
app’s goal of facilitating high-quality dog social interactions.
7SENG013W Software Development Project 2024/2025 83
Figure 4.8.1b: Homepage and Filter Feature
7SENG013W Software Development Project 2024/2025 84
Wireframes 3: Match Flow Feature
The Match Flow feature facilitates the process of connecting with other dog owners,
enabling users to view detailed profiles, send personalised connection requests, and
manage incoming/outgoing match statuses.
Pet Profile View:
• Profile Details: Displays the dog’s image, breed, gender, age, weight, verification
status, and neutered status.
• Bio Section: Offers an owner-written introduction highlighting personality traits,
favourite activities, and behaviour.
• Behaviour Tags: Includes “Play Style” (e.g., Chaser, Explorer, Mouthy) and
“Preferred Play Environment” (e.g., parks, home/garden).
• Connection Action: A “Let’s Connect” button initiates the match request flow.
Connection Request Creation:
• After tapping “Let’s Connect,” users are presented with a text box to write a custom
message. This personalisation encourages authentic connections and sets the tone
for potential playdates.
Match Management Interface:
• Pending Tab: Displays incoming requests from other users, showing profile info,
message preview, and action buttons (“Accept” or “Decline”).
• Requested Tab: Displays outgoing requests sent by the current user, including the
ability to cancel pending requests.
Interaction Flow:
1. View a profile
2. Tap “Let’s Connect”
3. Write a quick message
4. Send request
5. Request appears under “Requested” for the sender and “Pending” for the recipient.
This structured flow balances discoverability with control, allowing users to manage
connections efficiently while maintaining a friendly, dog-focused experience.
7SENG013W Software Development Project 2024/2025 85
Figure 4.8.1c: Match Flow Feature
Wireframes 4: Chat & Meetup Feature
The Chat & Meetup feature enables ongoing communication between matched users and
facilitates the organisation of in-person dog meetups.
Chat Interface:
• Chat List View: Displays all active conversations with profile photo, name, and
location of the matched dog. Unread chats are visually highlighted for quick
identification.
• Conversation View: Supports real-time messaging with a clean bubble layout.
Users can send and receive text-based messages, maintaining a friendly and
intuitive chat experience.
• Profile Shortcut: Includes a “view profile” option for quick access to the match’s
dog profile from within the chat.
Meet-up Scheduling Within Chat:
• Users can propose meetups directly in the conversation by selecting a date, time,
and location.
• The meetup request appears as a special embedded card in the chat for easy
recognition, including details like date/time and a “view meet-up” link.
Meet-up Management:
• Meet-up Tab: Displays scheduled meetups categorised into “Upcoming” and
“Completed” sections.
7SENG013W Software Development Project 2024/2025 86
• Status Tracking: Pending meetups await confirmation from the other user, while
accepted ones are locked in.
• Details View: Each entry displays the dog’s name, meeting location, and time,
ensuring clarity for both parties.
Interaction Flow:
1. 2. 3. 4. Navigate to “Chat” from the bottom navigation.
Select a match to open the conversation.
Discuss and propose a meetup using the embedded scheduling feature.
Manage all scheduled and past meetups under the “Meet-up” tab.
This feature integrates social interaction and logistical coordination, making it seamless for
owners to progress from digital introductions to real-world playdates.
Figure 4.8.1d: Chat & Meetup Feature
7SENG013W Software Development Project 2024/2025 87
4.8.2 Screen Graph
The screen graph below illustrates the navigation flows between major screens of the
SoPup application, covering authentication, onboarding, and mode-specific features
(Puppy Mode and Social Mode). The design reflects the workflows identified in the use
case diagrams and ensures that navigation is intuitive, mode-aware, and consistent with
the app’s functional requirements.
Authentication & Onboarding Flow
• Enter App: Users can choose to Login or Register.
• Login: Directs the user to the appropriate mode (Puppy Mode or Social Mode)
depending on the stored profile.
• Register: Proceeds to Onboarding, which collects the following information in
sequence:
1. Dog Name
2. Breed
3. Gender
4. 5. Age
Health Status (Vaccination Status, Flea Treatment Status)
• Mode Assignment:
o If the dog is under 12 weeks, the user is placed into Puppy Mode.
o If the dog is 12 weeks or older, the user enters Social Mode Onboarding, which
additionally collects:
§ Play Style (Energetic, Gentle, Curious, Dominant, Submissive, Independent)
§ Play Area (Park, Dog Café, Trail, Indoor)
§ Activity Type (Walk, Jog, Run, Fetch, Group Walk, Casual Meet-Up)
§ Triggers (Cats, Children, Humping, Loud Noises)
§ Location Access Permission
7SENG013W Software Development Project 2024/2025 88
Figure4.8.2a: Authentication & Onboarding Flow
7SENG013W Software Development Project 2024/2025 89
Puppy Mode Flow
• Home:
o Displays Profile Cards with dog details (Name, Distance, Play Tags, Picture,
Play Style).
o Users can request a match by sending a short via the Match Request option
• Match:
o Incoming requests appear in Match Pending, users can accept or reject
o Outgoing requests appear in Match Requested
• Puppy Chat: Allows messaging but Meet-Up is disabled in Puppy Mode.
• Profile: Displays user and dog details.
• Switch Mode option appears when vaccinations are complete, redirecting to Social
Mode Profile.
Figure 4.8.2b: Puppy mode flow
7SENG013W Software Development Project 2024/2025 90
4.8.3 Social Mode Flow
• Home:
o Displays Profile Cards containing dog details (Name, Distance, Play Tags,
Picture, Play Style).
o Users can request a match by sending a short introductory message via the
Match Request option.
• Match:
o Match Pending: Displays incoming requests from other users; requests can
be accepted or rejected.
o Match Requested: Displays outgoing match requests sent by the current
user.
o Upon a successful match, all meet-up features become available.
• Chat:
o Supports text communication and creation of Meet-Up requests.
o Playdate Creation Flow:
1. Select Date
2. Select Time & Duration
3. Choose Location
4. Confirm Playdate
o Chat updates automatically to show upcoming and past meet-ups.
• Profile
o Shows detailed dog and owner information.
o Provides a direct link to Feedback after a meet-up, enabling rating and
review of the other party.