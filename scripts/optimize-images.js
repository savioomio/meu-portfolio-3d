import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const images = [
    { src: "https://i.ibb.co/ks3CqhLs/Imagem-do-Whats-App-de-2024-06-01-s-19-30-39-da49c860.jpg", alt: "47" },
    { src: "https://i.ibb.co/MySW20HY/1710640756635.jpg", alt: "12" },
    { src: "https://i.ibb.co/XrPF1DBd/1717282589787.jpg", alt: "63" },
    { src: "https://i.ibb.co/nq1F4jXx/1710637512927.jpg", alt: "5" },
    { src: "https://i.ibb.co/V0SLBQWx/1717290462142.jpg", alt: "29" },
    { src: "https://i.ibb.co/k2TbF1fH/1719968047504.jpg", alt: "34" },
    { src: "https://i.ibb.co/9HwLk3JP/1717285963932.jpg", alt: "19" },
    { src: "https://i.ibb.co/0VQ15mGc/1710637513018.jpg", alt: "8" },
    { src: "https://i.ibb.co/FLddSLFn/not2.png", alt: "56" },
    { src: "https://i.ibb.co/VpJWNV7T/1739127051902.jpg", alt: "60" },
    { src: "https://i.ibb.co/CKCp09nR/7e3f6a14-e69b-4090-aa2e-1f33df65caf7.jpg", alt: "3" },
    { src: "https://i.ibb.co/bj5VGLDb/1717289363745.jpg", alt: "22" },
    { src: "https://i.ibb.co/bjFXxcMS/1729871641444.jpg", alt: "41" },
    { src: "https://i.ibb.co/Pv6MJg5L/IMG-20240828-073318.jpg", alt: "50" },
    { src: "https://i.ibb.co/hFVWVZms/1717282589780.jpg", alt: "15" },
    { src: "https://i.ibb.co/XZRytsJv/7a587a9a-ed5b-45e3-81b3-1083fd0f33f9.jpg", alt: "2" },
    { src: "https://i.ibb.co/j9gvt19H/1719968047663.jpg", alt: "62" },
    { src: "https://i.ibb.co/mVXLWkMY/1717290166389.jpg", alt: "26" },
    { src: "https://i.ibb.co/5PhZnM6/19aa9028-90d9-4565-9bb9-f5ced86cb1a3.jpg", alt: "59" },
    { src: "https://i.ibb.co/bRsg7VYZ/1729871641436.jpg", alt: "40" },
    { src: "https://i.ibb.co/s9qJQQQB/1710644494058.jpg", alt: "13" },
    { src: "https://i.ibb.co/1Jrj3HF4/1710637512968.jpg", alt: "7" },
    { src: "https://i.ibb.co/kstfqX3S/1723046483995.webp", alt: "38" },
    { src: "https://i.ibb.co/zV9rjtHZ/1717285964004.jpg", alt: "64" },
    { src: "https://i.ibb.co/ycd47Yn8/1717290462153.jpg", alt: "30" },
    { src: "https://i.ibb.co/dwB6c87T/not1.jpg", alt: "55" },
    { src: "https://i.ibb.co/3YdVZtQs/1710637513102.jpg", alt: "9" },
    { src: "https://i.ibb.co/pv6dkhcB/1719968047522.jpg", alt: "35" },
    { src: "https://i.ibb.co/Y7S53CmS/1717290065345.jpg", alt: "25" },
    { src: "https://i.ibb.co/4R6bpqkk/9714c72e-1ab8-4558-a591-ceceb202de79.jpg", alt: "4" },
    { src: "https://i.ibb.co/RGtkZ6Kc/1710637513050.jpg", alt: "57" },
    { src: "https://i.ibb.co/HfzYB8yS/1717282589852.jpg", alt: "16" },
    { src: "https://i.ibb.co/GvvCn94g/1717289926389.jpg", alt: "23" },
    { src: "https://i.ibb.co/BMNTfYG/1710637512942.jpg", alt: "6" },
    { src: "https://i.ibb.co/TyRTMk2/1717290166408.jpg", alt: "27" },
    { src: "https://i.ibb.co/JPvyBtX/1710637513117.jpg", alt: "10" },
    { src: "https://i.ibb.co/jkF2Bbsd/1727718199583.jpg", alt: "39" },
    { src: "https://i.ibb.co/DgkP8Vsv/image.jpg", alt: "54" },
    { src: "https://i.ibb.co/7dt0qNjN/1717290610042.jpg", alt: "31" },
    { src: "https://i.ibb.co/JFr7ndBc/1718645168202.jpg", alt: "33" },
    { src: "https://i.ibb.co/Zpf41w9f/Imagem-do-Whats-App-de-2024-09-29-s-12-34-39-2d14a9d4.jpg", alt: "48" },
    { src: "https://i.ibb.co/NdnMqYtN/1723046483987.webp", alt: "37" },
    { src: "https://i.ibb.co/8np4KGhb/IMG-20240927-151918.jpg", alt: "52" },
    { src: "https://i.ibb.co/35T5XQqf/1710644494090.webp", alt: "14" },
    { src: "https://i.ibb.co/ksHhCJ0v/1736639492259.jpg", alt: "42" },
    { src: "https://i.ibb.co/TBQMmXDV/6fafe2e3-95c9-4155-8bf5-908cad77e8b2.jpg", alt: "1" },
    { src: "https://i.ibb.co/YFNV1Lpq/1717289032715.jpg", alt: "21" },
    { src: "https://i.ibb.co/3ypTsMCC/1717282589859.jpg", alt: "17" },
    { src: "https://i.ibb.co/20XBMhnn/1710637513130.webp", alt: "11" },
    { src: "https://i.ibb.co/nMVjL2qV/1717290441124.webp", alt: "28" },
    { src: "https://i.ibb.co/HLffL8t0/1719968047461.jpg", alt: "53" },
    { src: "https://i.ibb.co/8n1mjrPG/1717285964029.jpg", alt: "20" },
    { src: "https://i.ibb.co/zhKz5vsv/1736639492389.jpg", alt: "44" },
    { src: "https://i.ibb.co/1fXWStBs/IMG-20240828-073427.jpg", alt: "51" },
    { src: "https://i.ibb.co/YxPdVtf/1736639492365.jpg", alt: "43" },
    { src: "https://i.ibb.co/60x0z3J1/1719968047621.jpg", alt: "36" },
    { src: "https://i.ibb.co/6R4v1fYv/1717285963922.jpg", alt: "18" },
    { src: "https://i.ibb.co/ZR0DpM8T/1718645168196.jpg", alt: "32" },
    { src: "https://i.ibb.co/0yhvDztb/Captura-de-tela-2024-03-25-124011.png", alt: "45" },
    { src: "https://i.ibb.co/WWnyjkkP/f8afed35-f648-473b-9063-3d988dbf2831.jpg", alt: "46" },
    { src: "https://i.ibb.co/Q72vcZ03/1717289926441.jpg", alt: "24" },
    { src: "https://i.ibb.co/RpXRp4yP/1718645771043.jpg", alt: "61" },
    { src: "https://i.ibb.co/YVfskLP/IMG-20240828-073049.jpg", alt: "49" },
    { src: "https://i.ibb.co/yB68qy2P/1710644494036.jpg", alt: "58" },
];

const main = async () => {
    const outputDir = path.resolve(__dirname, '..', 'src', 'assets', 'dignissima');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`Starting to process ${images.length} images...`);

    for (const image of images) {
        const filePath = path.join(outputDir, `${image.alt}.webp`);
        if (fs.existsSync(filePath)) {
            console.log(`Skipping ${image.alt} (already exists)`);
            continue;
        }

        try {
            console.log(`Fetching ${image.alt}...`);
            const response = await fetch(image.src);
            if (!response.ok) throw new Error(`Failed to fetch ${image.src}: ${response.statusText}`);
            
            const buffer = await response.arrayBuffer();
            
            await sharp(Buffer.from(buffer))
                .resize({ width: 1920, withoutEnlargement: true })
                .webp({ quality: 80 })
                .toFile(filePath);
                
            console.log(`Saved ${image.alt}.webp`);
        } catch (error) {
            console.error(`Error processing ${image.alt}:`, error);
        }
    }
    console.log('All done!');
};

main();
