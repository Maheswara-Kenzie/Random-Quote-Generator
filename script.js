const nextBtn = document.getElementById('nextQuote');
let quote = document.getElementById('quote');
let author = document.getElementById('author');

const quotes = [
    {
        quote: 'Jangan sekali-kali meninggalkan sejarah',
        author: 'Ir.Soekarno'
    },
    {
        quote: "Tidak penting apapun agama atau sukumu, kalau kamu bisa melakukan sesuatu yang baik untuk semua orang, orang tidak pernah tanya apa agamamu.",
        author: 'Gus Dur'
    },
    {
        quote: '"Terkadang, kesulitan harus kamu rasakan terlebih dahulu sebelum kebahagiaan yang sempurna datang kepadamu."',
        author: 'Kartini'
    },
    {
        quote: '"Keberhasilan bukanlah milik orang yang pintar, namun milik mereka yang senantiasa berusaha."',
        author: 'B.J. Habibie'
    },
    {
        quote: '"Setiap tetes air mata, setiap keringat yang bercucuran, dan setiap kesakitan yang dirasakan adalah tanda bahwa kesuksesan sedang dalam perjalanan menuju kita."',
        author: 'Andrea Hinata'
    },
    {
        quote: '"Jangan pernah berhenti belajar, karena kehidupan tak pernah berhenti mengajarkan."',
        author: 'Najwa Shihab'
    },
    {
        quote: '"Dalam hidup kita lebih banyak menderita daripada bahagia, tetapi justru penderitaan itulah yang menjadikan kita manusia yang lebih baik."',
        author: 'Pramoedya Ananta'
    },
    {
        quote: '"Kita tidak akan pernah mencapai cita-cita kita tanpa belajar dan bekerja keras."',
        author: 'Sultan Syahrir'
    },
    {
        quote: '"Life is like a box of chocolates. You never know what youre gonna get."',
        author: 'Forrest Gump'
    },
    {
        quote: 'Try not to become a man of success. Rather become a man of value."',
        author: 'Albert Einstein'
    },
    {
        quote: '"The only thing worse than being blind is having sight but no vision."',
        author: 'Hellen Keller'
    },
    {
        quote: 'Ask not what your country can do for you—ask what you can do for your country."',
        author: 'John F.Kennedy'
    },
    {
        quote: '"The only thing we have to fear is fear itself."',
        author: 'Franklin D.Roosevelt'
    },
    {
        quote: '"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear."',
        author: 'Nelson Mandela'
    },
    {
        quote: '"Do, or do not. There is no try."',
        author: 'Master Yoda'
    },

    {
        quote: '"It always seems impossible until its done."',
        author: 'Nelson Mandela'
    },

    {
        quote: 'Pekerjaan-pekerjaan kecil yang selesai dilakukan lebih baik daripada rencana-rencana besar yang hanya didiskusikan',
        author: 'Peter Marshals'
    },

    {
        quote: 'Seseorang yang berani membuang satu jam waktunya secara sia-sia, maka dia tidak akan mengetahui nilai dari kehidupan',
        author: 'Charles Darwin'
    },

    {
        quote: 'Tidak apa-apa untuk merayakan kesuksesan, tapi lebih penting untuk memperhatikan pelajaran tentang kegagalan.',
        author: 'Bill Gates'
    },

    {
        quote: 'Raihlah ilmu! Dan untuk meraih ilmu, belajarlah untuk tenang dan sabar.',
        author: 'Umar Bin Khatab'
    },

    {
        quote: 'If you believe something needs to exist, if it\'s something you want to use yourself, don\'t let anyone ever stop you from doing it',
        author: 'Tobias Lütke'
    },
    {
        quote: "Tidak ada sukses yang bisa dicapai secara instan. Semua butuh proses dan kerja keras.",
        author: 'Chairil Tanjung'
    },
    {
        quote: "Kesuksesan itu tidak datang dari langit, melainkan dari kerja keras dan doa.",
        author: 'Chairil Tanjung'
    },
    {
        quote: "Kegagalan adalah bumbu kehidupan, kegagalan membuat kita bisa menjadi manusia yang lebih tangguh.",
        author: 'Sandiaga Uno'
    },
    {
        quote: "Masa depan milik mereka yang percaya pada keindahan mimpi-mimpinya.",
        author: 'Sandiaga Uno'
    },
    {
        quote: "Keberhasilan tidak diukur dari tempat kita memulai, tetapi dari seberapa tinggi kita melompat setelah jatuh.",
        author: 'William Tanuwijaya'
    },
    {
        quote: 'If you believe something needs to exist, if it\'s something you want to use yourself, don\'t let anyone ever stop you from doing it',
        author: 'Tobias Lütke'
    }
];

function getRandomIndex() {
    return Math.floor(Math.random() * quotes.length);
}

function getRandomQuote() {
    let randomIndex = getRandomIndex();
    return quotes[randomIndex];
}

// Set the initial quote
let initialQuote = getRandomQuote();
quote.innerHTML = initialQuote.quote;
author.innerHTML = initialQuote.author;

nextBtn.addEventListener('click', function () {
    let randomQuote = getRandomQuote();
    quote.innerHTML = randomQuote.quote;
    author.innerHTML = randomQuote.author;
});
