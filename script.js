// SkillCheck Quiz System

const questionBank = {
    web: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            answer: 0
        },
        {
            question: "Which tag is used to create a hyperlink?",
            options: ["<p>", "<a>", "<h1>", "<img>"],
            answer: 1
        },
        {
            question: "Which language is used to style a webpage?",
            options: ["HTML", "Python", "CSS", "SQL"],
            answer: 2
        },
{
    question: "Which tag is used to create a paragraph in HTML?",
    options: ["<p>", "<h1>", "<br>", "<div>"],
    answer: 0
},
{
    question: "Which tag is used to insert an image in HTML?",
    options: ["<image>", "<img>", "<picture>", "<src>"],
    answer: 1
},
{
    question: "Which CSS property changes text colour?",
    options: ["font-style", "background", "color", "text-size"],
    answer: 2
},
{
    question: "Which CSS property changes the background colour?",
    options: ["color", "background-color", "font-size", "border"],
    answer: 1
},
{
    question: "Which language adds interactivity to a webpage?",
    options: ["HTML", "CSS", "JavaScript", "SQL"],
    answer: 2
},
{
    question: "Which HTML tag creates the largest heading?",
    options: ["<h6>", "<head>", "<heading>", "<h1>"],
    answer: 3
},
{
    question: "Which symbol is used for an ID selector in CSS?",
    options: [".", "#", "*", "&"],
    answer: 1
},
{
    question: "Which symbol is used for a class selector in CSS?",
    options: ["#", ".", "@", "$"],
    answer: 1
},
{
    question: "Which HTML tag creates an unordered list?",
    options: ["<ol>", "<li>", "<ul>", "<list>"],
    answer: 2
},
{
    question: "Which HTML attribute specifies a link destination?",
    options: ["src", "href", "link", "target"],
    answer: 1
},
{
    question: "14. Which HTML tag creates an unordered list?",
    options: ["<ol>", "<li>", "<ul>", "<list>"],
    answer: 2
},
{
    question: "15. Which HTML attribute specifies a link destination?",
    options: ["src", "href", "link", "target"],
    answer: 1
},
{
    question: "16. Which tag is used to create a table row?",
    options: ["<td>", "<th>", "<tr>", "<table-row>"],
    answer: 2
},
{
    question: "17. Which tag creates a line break?",
    options: ["<break>", "<br>", "<lb>", "<line>"],
    answer: 1
},
{
    question: "18. Which tag is used to create a form?",
    options: ["<input>", "<form>", "<label>", "<fieldset-only>"],
    answer: 1
},
{
    question: "19. Which HTML attribute provides alternative text for an image?",
    options: ["title", "src", "alt", "href"],
    answer: 2
},
{
    question: "20. Which tag is used to create a numbered list?",
    options: ["<ul>", "<ol>", "<li>", "<dl>"],
    answer: 1
},
{
    question: "21. Which CSS property changes the size of text?",
    options: ["font-size", "text-style", "font-colour", "text-weight"],
    answer: 0
},
{
    question: "22. Which CSS property makes text bold?",
    options: ["font-style", "font-weight", "text-align", "text-decoration"],
    answer: 1
},
{
    question: "23. Which CSS property aligns text to the centre?",
    options: ["text-position", "align", "text-align", "font-align"],
    answer: 2
},
{
    question: "24. Which CSS property adds space inside an element's border?",
    options: ["margin", "padding", "outline", "gap-only"],
    answer: 1
},
{
    question: "25. Which CSS property adds space outside an element's border?",
    options: ["padding", "border", "margin", "width"],
    answer: 2
},
{
    question: "26. Which CSS property rounds the corners of an element?",
    options: ["border-radius", "corner-style", "round-border", "border-space"],
    answer: 0
},
{
    question: "27. Which CSS property controls an element's transparency?",
    options: ["visibility", "opacity", "display", "overflow"],
    answer: 1
},
{
    question: "28. Which CSS layout system is useful for one-dimensional layouts?",
    options: ["Flexbox", "Database", "HTML table only", "SQL"],
    answer: 0
},
{
    question: "29. Which CSS layout system is designed for rows and columns?",
    options: ["Float only", "CSS Grid", "Text-align", "Font-family"],
    answer: 1
},
{
    question: "30. Which CSS rule helps create responsive layouts?",
    options: ["@media", "@font", "@colour", "@screen-size"],
    answer: 0
},
{
    question: "31. Which JavaScript keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "static", "fixed"],
    answer: 1
},
{
    question: "32. Which keyword declares a variable that cannot be reassigned?",
    options: ["let", "var", "const", "change"],
    answer: 2
},
{
    question: "33. Which operator checks strict equality in JavaScript?",
    options: ["=", "==", "===", "!="],
    answer: 2
},
{
    question: "34. Which function displays a message in a browser alert box?",
    options: ["alert()", "printPage()", "showTextFile()", "messageBoxHTML()"],
    answer: 0
},
{
    question: "35. Which method selects an element by its ID?",
    options: ["getElementsByClass()", "getElementById()", "selectByName()", "findHTML()"],
    answer: 1
},
{
    question: "36. Which method adds an item to the end of an array?",
    options: ["pop()", "shift()", "push()", "unshift()"],
    answer: 2
},
{
    question: "37. Which JavaScript statement repeats code while a condition is true?",
    options: ["if", "while", "switch", "break"],
    answer: 1
},
{
    question: "38. Which event occurs when a user clicks an element?",
    options: ["onchange", "onload", "onclick", "onhover"],
    answer: 2
},
{
    question: "39. What does DOM stand for?",
    options: ["Document Object Model", "Data Output Method", "Digital Ordinance Model", "Document Order Method"],
    answer: 0
},
{
    question: "40. Which HTML tag is used to connect an external JavaScript file?",
    options: ["<javascript>", "<script>", "<js>", "<code>"],
    answer: 1
},
{
    question: "41. Which HTML tag is used to connect an external CSS file?",
    options: ["<style src>", "<css>", "<link>", "<script>"],
    answer: 2
},
{
    question: "42. What is the main purpose of a web browser?",
    options: ["To display and interact with web pages", "To create computer hardware", "To repair a keyboard", "To manage electricity"],
    answer: 0
},
{
    question: "43. What does URL stand for?",
    options: ["Uniform Resource Locator", "Universal Reading Link", "User Reference List", "Uniform Record Language"],
    answer: 0
},
{
    question: "44. What does HTTP stand for?",
    options: ["HyperText Transfer Protocol", "HighText Transfer Program", "Hyper Tool Text Process", "Home Transfer Text Protocol"],
    answer: 0
},
{
    question: "45. Which HTTP status code usually means that a page was not found?",
    options: ["200", "301", "404", "500"],
    answer: 2
},
{
    question: "46. What is the main purpose of web hosting?",
    options: ["To make website files available online", "To design logos only", "To create passwords", "To edit audio"],
    answer: 0
},
{
    question: "47. What is the purpose of a domain name?",
    options: ["To provide a readable address for a website", "To change font size", "To store images only", "To replace HTML"],
    answer: 0
},
{
    question: "48. What does SEO stand for?",
    options: ["Search Engine Optimization", "Site Editing Option", "Search Email Operation", "System Engine Output"],
    answer: 0
},
{
    question: "49. What is the purpose of website accessibility?",
    options: ["To make websites usable by people with different abilities", "To make every page colourful", "To increase image size", "To hide website content"],
    answer: 0
},
{
    question: "50. What is the purpose of testing a website?",
    options: ["To find errors and check functionality", "To remove all HTML", "To disable navigation", "To delete all images"],
    answer: 0
}
    ],
    

    graphic: [
        {
            question: "Which colour model is commonly used for screens?",
            options: ["CMYK", "RGB", "Grayscale", "Bitmap"],
            answer: 1
        },
        {
            question: "What is typography?",
            options: [
                "Editing videos",
                "Arranging and styling text",
                "Writing code",
                "Creating databases"
            ],
            answer: 1
        },
        {
            question: "Which tool is commonly used to select objects in design software?",
            options: ["Selection Tool", "Audio Tool", "Print Tool", "Browser Tool"],
            answer: 0
        },
    {
        question: "1. Which colour model is commonly used for screens?",
        options: ["CMYK", "RGB", "Grayscale", "Bitmap"],
        answer: 1
    },
    {
        question: "2. Which colour mode is commonly used for printing?",
        options: ["RGB", "HSL", "CMYK", "HEX"],
        answer: 2
    },
    {
        question: "3. What is typography?",
        options: ["Editing videos", "Arranging and styling text", "Writing code", "Creating databases"],
        answer: 1
    },
    {
        question: "4. Which tool is used to select objects in design software?",
        options: ["Selection Tool", "Audio Tool", "Print Tool", "Browser Tool"],
        answer: 0
    },
    {
        question: "5. What does PNG stand for?",
        options: ["Portable Network Graphics", "Personal New Graphic", "Printed Network Group", "Photo Number Graphics"],
        answer: 0
    },
    {
        question: "6. Which file format commonly supports transparent backgrounds?",
        options: ["JPG", "PNG", "BMP", "TXT"],
        answer: 1
    },
    {
        question: "7. Which software is widely used for photo editing?",
        options: ["Microsoft Word", "Adobe Photoshop", "Notepad", "Calculator"],
        answer: 1
    },
    {
        question: "8. Which software is commonly used for vector graphics?",
        options: ["Adobe Illustrator", "Windows Media Player", "Notepad", "Excel"],
        answer: 0
    },
    {
        question: "9. What is a vector graphic?",
        options: ["A sound file", "A graphic made using paths and shapes", "A video", "A text document"],
        answer: 1
    },
    {
        question: "10. What is a raster image made of?",
        options: ["Pixels", "Paragraphs", "Slides", "Sounds"],
        answer: 0
    },
    {
        question: "11. What does resolution describe?",
        options: ["Image detail", "File name", "Font family", "Page title"],
        answer: 0
    },
    {
        question: "12. What does DPI commonly mean?",
        options: ["Dots Per Inch", "Design Page Image", "Digital Print Internet", "Data Per Image"],
        answer: 0
    },
    {
        question: "13. Which format is commonly used for photographs on websites?",
        options: ["JPG/JPEG", "DOCX", "EXE", "MP3"],
        answer: 0
    },
    {
        question: "14. What is the purpose of a logo?",
        options: ["To identify a brand", "To play music", "To calculate numbers", "To store passwords"],
        answer: 0
    },
    {
        question: "15. What is a colour palette?",
        options: ["A collection of selected colours", "A keyboard", "A font file", "A printer"],
        answer: 0
    },
    {
        question: "16. Which colours are primary in the RGB model?",
        options: ["Red, Green, Blue", "Red, Yellow, Black", "Cyan, Magenta, Yellow", "Black, White, Grey"],
        answer: 0
    },
    {
        question: "17. Which colour model is subtractive?",
        options: ["RGB", "CMYK", "HSL", "HEX"],
        answer: 1
    },
    {
        question: "18. What is contrast in design?",
        options: ["Difference between visual elements", "Deleting an image", "Saving a file", "Changing a file name"],
        answer: 0
    },
    {
        question: "19. What does alignment help achieve?",
        options: ["Organised placement of elements", "Louder audio", "Faster internet", "More storage"],
        answer: 0
    },
    {
        question: "20. What is white space in design?",
        options: ["Empty space around elements", "Only white text", "A file format", "A type of printer"],
        answer: 0
    },
    {
        question: "21. What is visual hierarchy?",
        options: ["Arranging elements by importance", "Making every element identical", "Removing all colours", "Compressing files"],
        answer: 0
    },
    {
        question: "22. What is kerning?",
        options: ["Adjusting space between specific letters", "Changing image size", "Cropping a photo", "Drawing a circle"],
        answer: 0
    },
    {
        question: "23. What is leading in typography?",
        options: ["Space between lines of text", "Space between pages", "Image brightness", "Border thickness"],
        answer: 0
    },
    {
        question: "24. Which font category includes serifs?",
        options: ["Serif", "Sans-serif", "Bitmap", "Vector"],
        answer: 0
    },
    {
        question: "25. Which font category does not have serifs?",
        options: ["Serif", "Sans-serif", "Script only", "Decorative only"],
        answer: 1
    },
    {
        question: "26. What is a mockup?",
        options: ["A visual preview of a design", "An audio recording", "A programming error", "A spreadsheet formula"],
        answer: 0
    },
    {
        question: "27. What is a design brief?",
        options: ["A document describing project requirements", "A colour filter", "A printer cable", "A video effect"],
        answer: 0
    },
    {
        question: "28. What is cropping?",
        options: ["Removing unwanted outer parts of an image", "Adding sound", "Changing a font", "Creating a folder"],
        answer: 0
    },
    {
        question: "29. What does opacity control?",
        options: ["Transparency of an element", "Spelling", "File name", "Page number"],
        answer: 0
    },
    {
        question: "30. What is a layer in graphic design?",
        options: ["A separate level of design content", "A type of keyboard", "An internet connection", "A paper size"],
        answer: 0
    },
    {
        question: "31. Which tool is commonly used to remove parts of an image?",
        options: ["Eraser Tool", "Text Tool", "Zoom Tool", "Hand Tool"],
        answer: 0
    },
    {
        question: "32. What is the purpose of the Crop Tool?",
        options: ["To trim an image", "To type a paragraph", "To record audio", "To create a spreadsheet"],
        answer: 0
    },
    {
        question: "33. What does the Pen Tool commonly create?",
        options: ["Paths and curves", "Sound tracks", "Tables", "Email accounts"],
        answer: 0
    },
    {
        question: "34. What is a gradient?",
        options: ["A gradual transition between colours", "A file folder", "A text error", "A printer setting only"],
        answer: 0
    },
    {
        question: "35. What is the purpose of a clipping mask?",
        options: ["To show content within a defined shape", "To delete all layers", "To play a video", "To rename a file"],
        answer: 0
    },
    {
        question: "36. Which format is suitable for scalable vector artwork?",
        options: ["SVG", "MP3", "TXT", "WAV"],
        answer: 0
    },
    {
        question: "37. What does PDF stand for?",
        options: ["Portable Document Format", "Personal Design File", "Photo Drawing Format", "Printed Data Folder"],
        answer: 0
    },
    {
        question: "38. Which design principle creates a feeling of visual stability?",
        options: ["Balance", "Noise", "Blur", "Distortion"],
        answer: 0
    },
    {
        question: "39. What does repetition help create in design?",
        options: ["Consistency", "Random errors", "Lower resolution", "Audio effects"],
        answer: 0
    },
    {
        question: "40. What is proximity in design?",
        options: ["Placing related elements near each other", "Making every element invisible", "Increasing file size", "Changing the computer screen"],
        answer: 0
    },
    {
        question: "41. What is the purpose of a grid in layout design?",
        options: ["To organise content", "To record sound", "To delete text", "To change file extensions"],
        answer: 0
    },
    {
        question: "42. What is branding?",
        options: ["Creating a consistent identity for a business", "Only editing photographs", "Installing software", "Writing computer code"],
        answer: 0
    },
    {
        question: "43. What is an infographic?",
        options: ["A visual presentation of information", "An audio file", "A programming language", "A printer component"],
        answer: 0
    },
    {
        question: "44. Which principle makes an element stand out?",
        options: ["Emphasis", "Compression", "Cropping", "Duplication"],
        answer: 0
    },
    {
        question: "45. What is complementary colour contrast?",
        options: ["Contrast between colours opposite on the colour wheel", "Using only black", "Using identical colours", "Removing all colours"],
        answer: 0
    },
    {
        question: "46. What is a thumbnail?",
        options: ["A small preview image", "A large poster", "A font style", "A printer setting"],
        answer: 0
    },
    {
        question: "47. What is image retouching?",
        options: ["Improving or correcting an image", "Writing a spreadsheet", "Creating a website link", "Recording a voice"],
        answer: 0
    },
    {
        question: "48. What should be considered when designing for social media?",
        options: ["Platform dimensions and audience", "Only the designer's computer brand", "The keyboard colour", "The file creation date only"],
        answer: 0
    },
    {
        question: "49. Why should designers check copyright before using an image?",
        options: ["To respect usage rights", "To increase brightness", "To change the image format", "To add more pixels"],
        answer: 0
    },
    {
        question: "50. What is the main goal of good graphic design?",
        options: ["Communicate a message clearly and effectively", "Use as many fonts as possible", "Fill every empty space", "Use only bright colours"],
        answer: 0
    }
],

    marketing: [
        {
            question: "What is SEO?",
            options: [
                "Search Engine Optimization",
                "Social Email Operation",
                "System Engine Output",
                "Search Editing Option"
            ],
            answer: 0
        },
        {
            question: "Which platform is commonly used for video marketing?",
            options: ["YouTube", "Calculator", "Notepad", "Paint"],
            answer: 0
        },
        {
            question: "What is the main purpose of digital marketing?",
            options: [
                "Repair computers",
                "Promote products and services online",
                "Create operating systems",
                "Design hardware"
            ],
            answer: 1
        },
{
question: "What is digital marketing?",
options: ["Marketing online", "Road construction", "Computer repair", "Book printing"],
answer: 0
},
{
question: "What does SEO stand for?",
options: ["Search Engine Optimization", "Social Email Operation", "System Engine Output", "Search Editing Option"],
answer: 0
},
{
question: "Which platform is commonly used for video marketing?",
options: ["YouTube", "Calculator", "Notepad", "Paint"],
answer: 0
},
{
question: "What is the main purpose of digital marketing?",
options: ["Repair computers", "Promote products and services online", "Create operating systems", "Design hardware"],
answer: 1
},
{
question: "What does SEM stand for?",
options: ["Search Engine Marketing", "Social Email Method", "System Editing Mode", "Search Entry Machine"],
answer: 0
},
{
question: "Which is a social media platform?",
options: ["Instagram", "MS Paint", "Notepad", "Calculator"],
answer: 0
},
{
question: "What is email marketing?",
options: ["Sending promotional emails", "Repairing emails", "Creating hardware", "Editing videos only"],
answer: 0
},
{
question: "What is a target audience?",
options: ["People a campaign aims to reach", "A computer screen", "A website address", "A type of software"],
answer: 0
},
{
question: "What does CPC stand for in advertising?",
options: ["Cost Per Click", "Computer Program Code", "Cost Per Customer", "Click Program Control"],
answer: 0
},
{
question: "What does CTR stand for?",
options: ["Click-Through Rate", "Customer Tracking Record", "Content Type Review", "Click Time Report"],
answer: 0
},
{
question: "What is a keyword in SEO?",
options: ["A word people search for", "A computer password", "A file name only", "A programming error"],
answer: 0
},
{
question: "What is content marketing?",
options: ["Creating useful content to attract an audience", "Selling computers only", "Repairing websites", "Installing operating systems"],
answer: 0
},
{
question: "Which is an example of a search engine?",
options: ["Google", "PowerPoint", "Photoshop", "Excel"],
answer: 0
},
{
question: "What is a website?",
options: ["A collection of web pages", "A keyboard", "A printer", "A computer cable"],
answer: 0
},
{
question: "What does URL stand for?",
options: ["Uniform Resource Locator", "Universal Record Link", "User Reading Language", "Unified Research List"],
answer: 0
},
{
question: "What is organic traffic?",
options: ["Visitors from unpaid search results", "Paid advertisements only", "Offline visitors", "Email attachments"],
answer: 0
},
{
question: "What is paid advertising?",
options: ["Paying to promote content or products", "Posting without payment", "Writing personal notes", "Creating folders"],
answer: 0
},
{
question: "Which platform is widely used for professional networking?",
options: ["LinkedIn", "Calculator", "Paint", "Notepad"],
answer: 0
},
{
question: "What is a hashtag used for?",
options: ["Categorizing and discovering content", "Deleting accounts", "Repairing computers", "Creating passwords"],
answer: 0
},
{
question: "What is a call to action (CTA)?",
options: ["A prompt asking users to take action", "A computer virus", "A website error", "A type of keyboard"],
answer: 0
},
{
question: "What is Google Analytics used for?",
options: ["Analyzing website traffic and activity", "Editing photos", "Writing code only", "Sending text messages"],
answer: 0
},
{
question: "What is a landing page?",
options: ["A page designed for a specific campaign or action", "A computer desktop", "A printer setting", "An email inbox"],
answer: 0
},
{
question: "What is conversion in digital marketing?",
options: ["A user completing a desired action", "Closing a browser", "Changing a font", "Turning off a computer"],
answer: 0
},
{
question: "What is a marketing campaign?",
options: ["A planned set of promotional activities", "A computer game", "A keyboard shortcut", "A file format"],
answer: 0
},
{
question: "What does ROI stand for?",
options: ["Return on Investment", "Rate of Internet", "Record of Information", "Range of Interest"],
answer: 0
},
{
question: "What is influencer marketing?",
options: ["Promoting products through influential creators", "Repairing mobile phones", "Creating databases", "Printing documents"],
answer: 0
},
{
question: "Which is an example of e-commerce?",
options: ["Buying products online", "Writing on paper", "Repairing a chair", "Reading a printed poster"],
answer: 0
},
{
question: "What is affiliate marketing?",
options: ["Earning commission by promoting products", "Repairing websites", "Creating computer chips", "Sending office letters"],
answer: 0
},
{
question: "What is a backlink?",
options: ["A link from another website to your website", "A computer backup file", "A password", "An image filter"],
answer: 0
},
{
question: "What is mobile marketing?",
options: ["Marketing through mobile devices", "Repairing mobile screens", "Building mobile towers only", "Creating computer keyboards"],
answer: 0
},
{
question: "What is a blog?",
options: ["A website or page with regularly published articles", "A computer cable", "An email password", "A printer"],
answer: 0
},
{
question: "What is audience engagement?",
options: ["How people interact with content", "How fast a computer starts", "The size of a keyboard", "The number of computer folders"],
answer: 0
},
{
question: "Which metric counts likes, comments, and shares?",
options: ["Engagement", "Page size", "File format", "Screen resolution"],
answer: 0
},
{
question: "What is a social media impression?",
options: ["A time content is displayed", "A product's price", "A website password", "A customer's address"],
answer: 0
},
{
question: "What is reach on social media?",
options: ["The number of unique people who see content", "The number of passwords", "The size of an image file", "The number of emails sent"],
answer: 0
},
{
question: "What is a meta description?",
options: ["A short summary of a webpage", "A computer program", "A social media password", "A video editing tool"],
answer: 0
},
{
question: "What does PPC stand for?",
options: ["Pay Per Click", "Page Program Code", "Post Per Customer", "Personal Profile Control"],
answer: 0
},
{
question: "What is remarketing?",
options: ["Advertising again to people who previously interacted with a brand", "Deleting advertisements", "Changing a website's name", "Repairing computers"],
answer: 0
},
{
question: "What is a marketing funnel?",
options: ["Stages a customer passes through before conversion", "A computer component", "A photo filter", "A type of email attachment"],
answer: 0
},
{
question: "Why is keyword research important?",
options: ["To understand what people search for", "To increase screen brightness", "To repair hardware", "To format a document"],
answer: 0
},
{
question: "What is a domain name?",
options: ["The readable address of a website", "A computer mouse", "An email attachment", "A programming loop"],
answer: 0
},
{
question: "What is web hosting?",
options: ["A service that stores website files and makes them accessible online", "Writing social media captions", "Designing a logo only", "Sending text messages"],
answer: 0
},
{
question: "What is A/B testing?",
options: ["Comparing two versions to see which performs better", "Testing computer keyboards", "Deleting two files", "Creating two passwords"],
answer: 0
},
{
question: "What is an email open rate?",
options: ["The percentage of delivered emails that are opened", "The number of website pages", "The price of a product", "The number of followers"],
answer: 0
},
{
question: "What is a lead in marketing?",
options: ["A potential customer", "A finished product only", "A computer cable", "A website background"],
answer: 0
},
{
question: "What is a buyer persona?",
options: ["A profile representing an ideal customer", "A type of computer", "An email service", "A payment machine"],
answer: 0
},
{
question: "Why is a content calendar useful?",
options: ["It helps plan and schedule content", "It repairs websites", "It blocks all advertisements", "It creates passwords"],
answer: 0
},
{
question: "What is the purpose of a strong headline?",
options: ["To attract attention and encourage reading", "To hide website content", "To slow down a webpage", "To delete a post"],
answer: 0
},
{
question: "Why should digital marketers monitor campaign results?",
options: ["To measure performance and improve campaigns", "To change computer hardware", "To delete customers", "To stop all website traffic"],
answer: 0
},
{
question: "Which practice is important in ethical digital marketing?",
options: ["Respecting privacy and obtaining required consent", "Sending deceptive messages", "Buying fake reviews", "Misusing personal data"],
answer: 0
}
    ],

    telecalling: [
        {
            question: "What is important when speaking to a customer?",
            options: [
                "Listening carefully",
                "Interrupting frequently",
                "Speaking rudely",
                "Ignoring questions"
            ],
            answer: 0
        },
        {
            question: "How should you greet a customer?",
            options: [
                "What do you want?",
                "Hello, how may I help you?",
                "Speak quickly",
                "Call later"
            ],
            answer: 1
        },
        {
            question: "What should you do if you do not know an answer?",
            options: [
                "Give incorrect information",
                "Disconnect immediately",
                "Politely verify the information",
                "Ignore the customer"
            ],
            answer: 2
        },
        
{
question: "What is telecalling?",
options: ["Communicating with customers over the phone", "Designing posters", "Writing computer programs", "Repairing computers"],
answer: 0
},
{
question: "How should you greet a customer?",
options: ["What do you want?", "Hello, how may I help you?", "Speak quickly", "Call later"],
answer: 1
},
{
question: "What should you do if you do not know an answer?",
options: ["Give incorrect information", "Disconnect immediately", "Politely verify the information", "Ignore the customer"],
answer: 2
},
{
question: "What is active listening?",
options: ["Listening carefully and understanding", "Interrupting frequently", "Talking continuously", "Ignoring questions"],
answer: 0
},
{
question: "What is the purpose of a telecalling script?",
options: ["To guide the conversation", "To confuse customers", "To avoid listening", "To end every call quickly"],
answer: 0
},
{
question: "How should you speak to a customer?",
options: ["Politely and clearly", "Rudely", "Very aggressively", "Without listening"],
answer: 0
},
{
question: "What should you do when a customer is angry?",
options: ["Argue with them", "Stay calm and listen", "Disconnect immediately", "Laugh at them"],
answer: 1
},
{
question: "What is the first step in an outbound sales call?",
options: ["Introduce yourself and the company", "Ask for payment immediately", "End the call", "Argue with the customer"],
answer: 0
},
{
question: "What is an inbound call?",
options: ["A call received by the company", "A call made by the company", "A text message", "An email campaign"],
answer: 0
},
{
question: "What is an outbound call?",
options: ["A call made by the company to someone", "A call received by the company", "A website visit", "A printed letter"],
answer: 0
},
{
question: "Why should you confirm a customer's needs?",
options: ["To offer a suitable solution", "To waste time", "To avoid helping", "To end the call"],
answer: 0
},
{
question: "What is customer service?",
options: ["Helping customers with their needs and problems", "Ignoring complaints", "Selling without explanation", "Ending every call quickly"],
answer: 0
},
{
question: "What should you do before placing a customer on hold?",
options: ["Ask permission and explain briefly", "Put them on hold without warning", "Disconnect the call", "Mute them permanently"],
answer: 0
},
{
question: "What is call etiquette?",
options: ["Professional and polite phone behaviour", "Speaking rudely", "Interrupting customers", "Ignoring company rules"],
answer: 0
},
{
question: "Why is clear pronunciation important?",
options: ["It helps customers understand you", "It makes calls longer", "It prevents all questions", "It replaces listening"],
answer: 0
},
{
question: "What should you do if you dial the wrong number?",
options: ["Apologize politely", "Argue with the person", "Keep calling repeatedly", "Demand personal details"],
answer: 0
},
{
question: "What is a sales lead?",
options: ["A potential customer", "A completed invoice only", "A phone charger", "A company logo"],
answer: 0
},
{
question: "What does follow-up mean?",
options: ["Contacting a customer again when appropriate", "Deleting customer records", "Ignoring the customer", "Ending all communication"],
answer: 0
},
{
question: "What should you do if a customer says they are busy?",
options: ["Ask for a convenient time to call back", "Keep talking without permission", "Argue with them", "Call continuously"],
answer: 0
},
{
question: "Why should you ask relevant questions?",
options: ["To understand the customer's needs", "To confuse the customer", "To avoid giving help", "To make the call unnecessarily long"],
answer: 0
},
{
question: "What is empathy in customer service?",
options: ["Understanding another person's feelings", "Ignoring feelings", "Speaking louder", "Ending the call"],
answer: 0
},
{
question: "What should you do if a customer asks for a supervisor?",
options: ["Follow company procedure and assist them", "Refuse rudely", "Disconnect immediately", "Insult the customer"],
answer: 0
},
{
question: "What is the purpose of call recording where legally permitted?",
options: ["Quality monitoring and training", "Spreading customer details", "Entertainment only", "Replacing every employee"],
answer: 0
},
{
question: "What information should you avoid sharing with unauthorized people?",
options: ["Confidential customer information", "Public company opening hours", "A publicly available website", "General product information"],
answer: 0
},
{
question: "How should you end a professional call?",
options: ["Summarize the next steps and thank the customer", "Disconnect without a word", "Argue again", "Ignore the customer"],
answer: 0
},
{
question: "What is the purpose of a CRM system?",
options: ["Managing customer information and interactions", "Editing photos", "Creating animations only", "Repairing phones"],
answer: 0
},
{
question: "What does CRM stand for?",
options: ["Customer Relationship Management", "Call Recording Machine", "Customer Repair Method", "Computer Response Mode"],
answer: 0
},
{
question: "What should you do after a call if records are required?",
options: ["Update the call notes accurately", "Delete all information", "Record false details", "Ignore the result"],
answer: 0
},
{
question: "What is a call disposition?",
options: ["A label describing the call outcome", "A phone's colour", "A customer's password", "A type of headset"],
answer: 0
},
{
question: "How can you build trust with a customer?",
options: ["Be honest and provide accurate information", "Make false promises", "Hide important details", "Pressure the customer"],
answer: 0
},
{
question: "What should you do if a customer asks about an unavailable product?",
options: ["Explain honestly and offer alternatives if available", "Pretend it is available", "Give false details", "End the call rudely"],
answer: 0
},
{
question: "What is cross-selling?",
options: ["Offering a related product or service", "Cancelling every order", "Ignoring customer needs", "Ending a call"],
answer: 0
},
{
question: "What is upselling?",
options: ["Suggesting a higher-value suitable option", "Giving incorrect prices", "Refusing all sales", "Deleting customer records"],
answer: 0
},
{
question: "What should you do when a customer raises a complaint?",
options: ["Listen, acknowledge, and follow the complaint process", "Blame the customer", "Ignore the complaint", "Disconnect immediately"],
answer: 0
},
{
question: "What is a call transfer?",
options: ["Connecting a caller to another appropriate person or department", "Deleting the call", "Turning off the phone", "Sending a text message"],
answer: 0
},
{
question: "Why is patience important in telecalling?",
options: ["It helps manage questions and difficult conversations", "It makes customers less important", "It avoids all communication", "It replaces product knowledge"],
answer: 0
},
{
question: "What should you do if you cannot hear the customer clearly?",
options: ["Politely ask them to repeat or speak more clearly", "Guess their information", "Shout at them", "End every call"],
answer: 0
},
{
question: "What is product knowledge?",
options: ["Understanding a product's features and benefits", "Knowing only the company logo", "Memorizing phone numbers only", "Ignoring product details"],
answer: 0
},
{
question: "What should you do before making a sales call?",
options: ["Review relevant customer and product information", "Make up product details", "Ignore the purpose of the call", "Share private information"],
answer: 0
},
{
question: "What is a call-to-action in a sales conversation?",
options: ["A clear suggested next step", "An unrelated story", "A complaint record", "A phone setting"],
answer: 0
},
{
question: "How should you respond if a customer declines an offer?",
options: ["Respect their decision politely", "Pressure them repeatedly", "Insult them", "Call them every few minutes"],
answer: 0
},
{
question: "Why is time management important in a call centre?",
options: ["It helps handle calls efficiently", "It encourages rude behaviour", "It removes the need for accuracy", "It prevents teamwork"],
answer: 0
},
{
question: "What is customer satisfaction?",
options: ["How well the service meets customer expectations", "The number of computers in an office", "The length of a phone cable", "The colour of a company logo"],
answer: 0
},
{
question: "What should you do if a customer requests that you stop promotional calls?",
options: ["Follow applicable rules and company procedures", "Ignore the request", "Call more frequently", "Share their number publicly"],
answer: 0
},
{
question: "Why should customer data be kept secure?",
options: ["To protect privacy and prevent misuse", "To share it with everyone", "To create spam calls", "To avoid customer service"],
answer: 0
},
{
question: "What is a telecalling KPI?",
options: ["A measure used to track performance", "A phone brand", "A website design", "A type of headset"],
answer: 0
},
{
question: "Which is an example of a telecalling KPI?",
options: ["Call resolution rate", "Screen wallpaper", "Keyboard colour", "Monitor size"],
answer: 0
},
{
question: "What should you do if a customer requests information you cannot verify?",
options: ["Check a reliable source before answering", "Guess the answer", "Provide a false guarantee", "Ignore company policy"],
answer: 0
},
{
question: "What is professional communication?",
options: ["Clear, respectful, and appropriate communication", "Rude and confusing language", "Interrupting constantly", "Using threats"],
answer: 0
},
{
question: "What is the best way to improve telecalling skills?",
options: ["Practice, listen to feedback, and learn product details", "Avoid training", "Ignore customer feedback", "Read no product information"],
answer: 0
}
],
    
};

let questions = [];
let currentQuestion = 0;
let score = 0;
let timeLeft = 3600;
let timerInterval;
let selectedCourse = "";

const courseSelect = document.getElementById("courseSelect");
const startButton = document.getElementById("startQuizBtn");
const quizContainer = document.getElementById("quizContainer");
const questionText = document.getElementById("questionText");
const answerOptions = document.getElementById("answerOptions");
const questionCounter = document.getElementById("questionCounter");
const quizTimer = document.getElementById("quizTimer");
const nextButton = document.getElementById("nextQuestionBtn");
const quizMessage = document.getElementById("quizMessage");
const quizResult = document.getElementById("quizResult");
const resultText = document.getElementById("resultText");
const retryButton = document.getElementById("retryQuizBtn");
const quizProgressFill = document.getElementById("quizProgressFill");

startButton.addEventListener("click", startQuiz);

nextButton.addEventListener("click", nextQuestion);

retryButton.addEventListener("click", () => {
    quizResult.hidden = true;
    quizContainer.hidden = true;
    startButton.hidden = false;
    courseSelect.disabled = false;
    quizMessage.textContent = "";
});

function startQuiz() {
    selectedCourse = courseSelect.value;

    if (!selectedCourse) {
        quizMessage.textContent = "Please select a course first!";
        return;
    }

    // Get questions for the selected course first
    questions = questionBank[selectedCourse];

    // Check if questions exist
    if (!questions || questions.length === 0) {
        quizMessage.textContent = "Questions not found for this course!";
        console.log("Selected course:", selectedCourse);
        console.log("Available courses:", Object.keys(questionBank));
        return;
    }

    currentQuestion = 0;
    score = 0;
    timeLeft = 3600;

    quizMessage.textContent = "";
    quizResult.hidden = true;
    startButton.hidden = true;
    courseSelect.disabled = true;
    quizContainer.hidden = false;

    showQuestion();
    startTimer();
}
function showQuestion() {
    const q = questions[currentQuestion];

    questionText.textContent = q.question;

    questionCounter.textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    quizProgressFill.style.width =
        `${((currentQuestion + 1) / questions.length) * 100}%`;

    answerOptions.innerHTML = "";

    q.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.className = "answer-option";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;

        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));

        answerOptions.appendChild(label);
    });

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Submit Test"
            : "Next Question →";
}

function nextQuestion() {
    const selectedAnswer =
        document.querySelector('input[name="answer"]:checked');

    if (!selectedAnswer) {
        alert("Please select an answer!");
        return;
    }

    if (Number(selectedAnswer.value) === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        finishQuiz();
    }
}

function startTimer() {
    clearInterval(timerInterval);
    updateTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            finishQuiz();
        }
    }, 1000);
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    quizTimer.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function finishQuiz() {
    clearInterval(timerInterval);

    quizContainer.hidden = true;
    quizResult.hidden = false;

    startButton.hidden = true;

    const percentage = Math.round((score / questions.length) * 100);

    resultText.textContent =
        `You scored ${score} out of ${questions.length} (${percentage}%).`;

    courseSelect.disabled = false;
}