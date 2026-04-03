// ============================================================
// 🛠️ ADD / EDIT / DELETE TOOLS FROM HERE!
//
// Each tool format:
// {
//   name: "Tool Name",            ← Name of the tool
//   icon: "🤖",                   ← Emoji icon
//   cat: "chat",                  ← Category (see list below)
//   desc: "Short description",    ← What it does
//   badge: "free",                ← "free" / "paid" / "new" / "hot"
//   link: "https://...",          ← Website link (replace with affiliate link)
//   rating: 4.5                   ← Rating from 1.0 to 5.0
// }
//
// Categories:
// "chat" | "image" | "video" | "code" | "voice" | "search" | "productivity" | "writing" | "avatar"
//
// To add a new tool: Just add one line to the list below!
// ============================================================

const tools = [
  // ===== 💬 CHAT AI =====
  { name:"ChatGPT",         icon:"🟢", cat:"chat",         desc:"OpenAI's most popular chatbot — powered by GPT-4o, most used AI in the world",          badge:"hot",  link:"https://chatgpt.com",                        rating:4.8 },
  { name:"Claude",          icon:"🔮", cat:"chat",         desc:"Anthropic's safe and smart AI — best for analysis, coding and long documents",           badge:"hot",  link:"https://claude.ai",                          rating:4.9 },
  { name:"Gemini",          icon:"💎", cat:"chat",         desc:"Google's AI assistant — seamlessly integrated with Search, Gmail and Docs",              badge:"free", link:"https://gemini.google.com",                  rating:4.5 },
  { name:"Grok",            icon:"⚡", cat:"chat",         desc:"xAI's chatbot — real-time X/Twitter data access built in",                               badge:"new",  link:"https://grok.x.ai",                          rating:4.3 },
  { name:"Copilot",         icon:"🪟", cat:"chat",         desc:"Microsoft's AI — built-in GPT-4 across Office 365 and Windows",                         badge:"free", link:"https://copilot.microsoft.com",              rating:4.4 },
  { name:"Meta AI",         icon:"🔵", cat:"chat",         desc:"Meta's AI — available inside WhatsApp, Instagram and Facebook",                          badge:"free", link:"https://meta.ai",                            rating:4.2 },
  { name:"Mistral",         icon:"🌪️", cat:"chat",         desc:"France's powerful open-source AI — fast and efficient model",                            badge:"free", link:"https://mistral.ai",                         rating:4.3 },
  { name:"DeepSeek",        icon:"🐋", cat:"chat",         desc:"China's powerful AI — as smart as GPT-4, completely free!",                              badge:"hot",  link:"https://deepseek.com",                       rating:4.7 },
  { name:"Poe",             icon:"🎭", cat:"chat",         desc:"All AI in one place — access Claude, GPT, Gemini and Llama together",                    badge:"free", link:"https://poe.com",                            rating:4.5 },
  { name:"HuggingChat",     icon:"🤗", cat:"chat",         desc:"Hugging Face's free chatbot — use the best open source models",                          badge:"free", link:"https://huggingface.co/chat",                rating:4.2 },
  { name:"Llama",           icon:"🦙", cat:"chat",         desc:"Meta's open source AI model — run it on your own server",                                badge:"free", link:"https://llama.meta.com",                     rating:4.4 },
  { name:"Qwen",            icon:"🇨🇳", cat:"chat",        desc:"Alibaba's AI model — strong in multilingual tasks and coding",                           badge:"new",  link:"https://chat.qwenlm.ai",                     rating:4.3 },
  { name:"Pi AI",           icon:"π",  cat:"chat",         desc:"Personal AI companion — emotional support and friendly conversations",                    badge:"free", link:"https://pi.ai",                              rating:4.3 },
  { name:"Character AI",    icon:"🎭", cat:"chat",         desc:"Chat with any character — fictional or real personalities",                               badge:"free", link:"https://character.ai",                       rating:4.5 },
  { name:"Replika",         icon:"💙", cat:"chat",         desc:"AI friend and companion — designed for emotional conversations",                          badge:"free", link:"https://replika.com",                        rating:4.1 },
  { name:"Groq",            icon:"🚀", cat:"chat",         desc:"World's fastest AI inference — ultra low latency responses",                              badge:"free", link:"https://groq.com",                           rating:4.6 },
  { name:"Together AI",     icon:"🤝", cat:"chat",         desc:"Best open source models in one place — fast and affordable API",                         badge:"free", link:"https://together.ai",                        rating:4.3 },
  { name:"Kimi",            icon:"🌙", cat:"chat",         desc:"Moonshot AI's chatbot — supports a 200K context window",                                  badge:"new",  link:"https://kimi.moonshot.cn",                   rating:4.3 },
  { name:"Cohere",          icon:"🔷", cat:"chat",         desc:"Enterprise AI — integrate with your business data easily",                               badge:"paid", link:"https://cohere.com",                         rating:4.3 },
  { name:"Inflection AI",   icon:"🌀", cat:"chat",         desc:"Enterprise AI platform — best for automating business workflows",                        badge:"new",  link:"https://inflection.ai",                      rating:4.2 },

  // ===== 🔍 SEARCH AI =====
  { name:"Perplexity AI",   icon:"🔵", cat:"search",       desc:"Most popular AI search — accurate answers with sources and citations",                   badge:"hot",  link:"https://perplexity.ai",                      rating:4.8 },
  { name:"You.com",         icon:"🔍", cat:"search",       desc:"AI search engine — code, write and search all in one place",                            badge:"free", link:"https://you.com",                            rating:4.4 },
  { name:"Phind",           icon:"👨‍💻", cat:"search",      desc:"AI search for developers — instantly solve coding problems",                            badge:"free", link:"https://phind.com",                          rating:4.6 },
  { name:"Bing AI",         icon:"🔷", cat:"search",       desc:"Microsoft's AI search — GPT-4 powered real-time web answers",                           badge:"free", link:"https://bing.com",                           rating:4.3 },
  { name:"Kagi",            icon:"🔎", cat:"search",       desc:"Premium ad-free AI search — guaranteed best quality results",                            badge:"paid", link:"https://kagi.com",                           rating:4.5 },
  { name:"Consensus",       icon:"📊", cat:"search",       desc:"Scientific research AI — direct answers from peer-reviewed papers",                      badge:"free", link:"https://consensus.app",                      rating:4.4 },
  { name:"Elicit",          icon:"🔬", cat:"search",       desc:"AI research assistant — automate your literature review",                                badge:"free", link:"https://elicit.com",                         rating:4.4 },
  { name:"iAsk AI",         icon:"❓", cat:"search",       desc:"Free AI search engine — honest and accurate answers",                                    badge:"free", link:"https://iask.ai",                            rating:4.1 },

  // ===== 🎨 IMAGE AI =====
  { name:"Midjourney",      icon:"🎨", cat:"image",        desc:"Most realistic AI art — best image generation tool on Discord",                          badge:"hot",  link:"https://midjourney.com",                     rating:4.9 },
  { name:"DALL-E 3",        icon:"🖼️", cat:"image",        desc:"OpenAI's image generator — use it directly inside ChatGPT",                             badge:"paid", link:"https://openai.com/dall-e-3",                rating:4.7 },
  { name:"Stable Diffusion",icon:"🌈", cat:"image",        desc:"Free and open-source image generator — run it locally too",                              badge:"free", link:"https://stability.ai",                       rating:4.5 },
  { name:"Adobe Firefly",   icon:"🦋", cat:"image",        desc:"Adobe's AI — seamless integration with Photoshop and Illustrator",                       badge:"paid", link:"https://firefly.adobe.com",                  rating:4.6 },
  { name:"Canva AI",        icon:"✏️", cat:"image",        desc:"Design + AI — easy image creation with ready-made templates",                            badge:"free", link:"https://canva.com",                          rating:4.7 },
  { name:"Leonardo AI",     icon:"🦁", cat:"image",        desc:"Best AI tool for game art and creative image generation",                                badge:"free", link:"https://leonardo.ai",                        rating:4.6 },
  { name:"Ideogram",        icon:"💡", cat:"image",        desc:"Images with text — best AI for posters and logos",                                       badge:"free", link:"https://ideogram.ai",                        rating:4.5 },
  { name:"Flux",            icon:"⚡", cat:"image",        desc:"Black Forest Labs' powerful new image AI model",                                         badge:"new",  link:"https://blackforestlabs.ai",                 rating:4.7 },
  { name:"Playground AI",   icon:"🛝", cat:"image",        desc:"Free unlimited image generation — beginner friendly interface",                          badge:"free", link:"https://playground.ai",                      rating:4.4 },
  { name:"NightCafe",       icon:"🌃", cat:"image",        desc:"AI art community — multiple models available in one place",                              badge:"free", link:"https://nightcafe.studio",                   rating:4.3 },
  { name:"Bing Image Creator",icon:"🖌️",cat:"image",      desc:"Microsoft's free DALL-E 3 image creator — no sign up needed",                           badge:"free", link:"https://bing.com/images/create",             rating:4.4 },
  { name:"Remove.bg",       icon:"✂️", cat:"image",        desc:"Remove background instantly — perfect cutout in just 1 click",                          badge:"free", link:"https://remove.bg",                          rating:4.6 },
  { name:"Clipdrop",        icon:"📸", cat:"image",        desc:"Stability AI's image editor — background removal, upscale and relight",                  badge:"free", link:"https://clipdrop.co",                        rating:4.5 },
  { name:"Krea AI",         icon:"🎭", cat:"image",        desc:"Real-time AI image generation — turn sketches into photos instantly",                    badge:"new",  link:"https://krea.ai",                            rating:4.5 },
  { name:"Recraft",         icon:"🎪", cat:"image",        desc:"Vector and brand design AI — generate SVG files easily",                                 badge:"new",  link:"https://recraft.ai",                         rating:4.4 },
  { name:"Getimg AI",       icon:"🖼️", cat:"image",        desc:"100+ AI models in one place — bulk image generation supported",                         badge:"free", link:"https://getimg.ai",                          rating:4.3 },
  { name:"Artbreeder",      icon:"🧬", cat:"image",        desc:"Blend and evolve images with AI — get completely unique results",                        badge:"free", link:"https://artbreeder.com",                     rating:4.2 },

  // ===== 🎬 VIDEO AI =====
  { name:"Sora",            icon:"🎬", cat:"video",        desc:"OpenAI's video generator — create cinematic quality videos from text",                   badge:"new",  link:"https://sora.com",                           rating:4.8 },
  { name:"Runway ML",       icon:"🎥", cat:"video",        desc:"Professional AI video editing and generation tool",                                      badge:"paid", link:"https://runwayml.com",                       rating:4.7 },
  { name:"Pika Labs",       icon:"⚡", cat:"video",        desc:"Create short cinematic videos from text or images",                                      badge:"free", link:"https://pika.art",                           rating:4.5 },
  { name:"Kling AI",        icon:"🎞️", cat:"video",        desc:"Kuaishou's AI — realistic motion and long video generation",                             badge:"new",  link:"https://klingai.com",                        rating:4.6 },
  { name:"Hailuo AI",       icon:"🌊", cat:"video",        desc:"MiniMax's fast and free video generation AI",                                            badge:"free", link:"https://hailuoai.com",                       rating:4.5 },
  { name:"Luma Dream Machine",icon:"🌙",cat:"video",       desc:"Photorealistic video generation from text or image",                                     badge:"free", link:"https://lumalabs.ai",                        rating:4.6 },
  { name:"Synthesia",       icon:"🎙️", cat:"video",        desc:"Create professional training and explainer videos using AI avatars",                     badge:"paid", link:"https://synthesia.io",                       rating:4.6 },
  { name:"HeyGen",          icon:"👤", cat:"video",        desc:"AI video avatars — create a talking video from your photo",                              badge:"paid", link:"https://heygen.com",                         rating:4.5 },
  { name:"Invideo AI",      icon:"🎦", cat:"video",        desc:"Create YouTube and social media videos easily from text",                                badge:"free", link:"https://invideo.io",                         rating:4.4 },
  { name:"Descript",        icon:"📝", cat:"video",        desc:"AI-powered video editing — edit the text and the video edits itself",                    badge:"paid", link:"https://descript.com",                       rating:4.5 },
  { name:"Veed.io",         icon:"🎬", cat:"video",        desc:"Online AI video editor — auto subtitles and translation included",                       badge:"free", link:"https://veed.io",                            rating:4.4 },
  { name:"Captions",        icon:"💬", cat:"video",        desc:"AI video captions and short clips — best for content creators",                          badge:"free", link:"https://captions.ai",                        rating:4.3 },

  // ===== 💻 CODE AI =====
  { name:"GitHub Copilot",  icon:"💻", cat:"code",         desc:"The best AI coding companion — integrated directly into VS Code",                        badge:"paid", link:"https://github.com/copilot",                 rating:4.8 },
  { name:"Cursor",          icon:"🖱️", cat:"code",         desc:"AI-powered code editor — understands your entire codebase",                              badge:"hot",  link:"https://cursor.sh",                          rating:4.9 },
  { name:"Replit AI",       icon:"🔁", cat:"code",         desc:"Code in the browser with AI — no setup required",                                        badge:"free", link:"https://replit.com",                         rating:4.5 },
  { name:"v0 by Vercel",    icon:"▲",  cat:"code",         desc:"Generate React UI components from text — deploy directly",                               badge:"new",  link:"https://v0.dev",                             rating:4.7 },
  { name:"Bolt.new",        icon:"⚡", cat:"code",         desc:"Build a full website from text and deploy it instantly",                                 badge:"hot",  link:"https://bolt.new",                           rating:4.8 },
  { name:"Claude Code",     icon:"🤖", cat:"code",         desc:"Anthropic's agentic coding CLI — powerful AI in your terminal",                          badge:"new",  link:"https://claude.ai/code",                     rating:4.8 },
  { name:"Tabnine",         icon:"🎯", cat:"code",         desc:"AI code completion — works inside all major code editors",                               badge:"free", link:"https://tabnine.com",                        rating:4.4 },
  { name:"Codeium",         icon:"🟩", cat:"code",         desc:"Free AI code completion — supports 70+ programming languages",                           badge:"free", link:"https://codeium.com",                        rating:4.5 },
  { name:"Lovable",         icon:"💖", cat:"code",         desc:"Build full apps with natural language — no coding needed",                               badge:"new",  link:"https://lovable.dev",                        rating:4.6 },
  { name:"Windsurf",        icon:"🏄", cat:"code",         desc:"Codeium's new AI IDE — best for agentic coding workflows",                               badge:"new",  link:"https://windsurf.ai",                        rating:4.7 },
  { name:"Amazon CodeWhisperer",icon:"🟠",cat:"code",      desc:"AWS's AI coding assistant — best for cloud integration",                                 badge:"free", link:"https://aws.amazon.com/codewhisperer",       rating:4.3 },
  { name:"Sourcegraph Cody",icon:"🐶", cat:"code",         desc:"AI for large codebases — search and explain code easily",                                badge:"free", link:"https://sourcegraph.com/cody",               rating:4.4 },

  // ===== 🎵 VOICE & MUSIC AI =====
  { name:"ElevenLabs",      icon:"🎙️", cat:"voice",        desc:"Most realistic AI voice cloning and text-to-speech technology",                          badge:"hot",  link:"https://try.elevenlabs.io/v2qhn6utnt3q",                      rating:4.9 },
  { name:"Suno AI",         icon:"🎵", cat:"voice",        desc:"Create a full song from text — AI writes lyrics and music both",                         badge:"hot",  link:"https://suno.ai",                            rating:4.8 },
  { name:"Udio",            icon:"🎶", cat:"voice",        desc:"AI music generation — create professional quality songs in minutes",                      badge:"new",  link:"https://udio.com",                           rating:4.7 },
  { name:"Murf AI",         icon:"🔊", cat:"voice",        desc:"Professional voiceover AI — 20+ languages and 120+ voices available",                    badge:"paid", link:"https://get.murf.ai/en82icvnkarh",                            rating:4.5 },
  { name:"Whisper",         icon:"🌬️", cat:"voice",        desc:"OpenAI's free speech-to-text — highly accurate transcription",                           badge:"free", link:"https://openai.com/whisper",                 rating:4.7 },
  { name:"Adobe Podcast",   icon:"🎙️", cat:"voice",        desc:"AI audio enhancer — instantly upgrade mic quality to studio grade",                      badge:"free", link:"https://podcast.adobe.com",                  rating:4.6 },
  { name:"Boomy",           icon:"🎸", cat:"voice",        desc:"Create original songs with AI — full music track ready in minutes",                      badge:"free", link:"https://boomy.com",                          rating:4.2 },
  { name:"Soundraw",        icon:"🎼", cat:"voice",        desc:"AI music generator — create royalty free background music",                              badge:"paid", link:"https://soundraw.io",                        rating:4.3 },
  { name:"Resemble AI",     icon:"🔉", cat:"voice",        desc:"Real-time voice cloning and custom AI voice generation",                                  badge:"paid", link:"https://resemble.ai",                        rating:4.3 },
  { name:"Lalal AI",        icon:"🎤", cat:"voice",        desc:"AI audio splitter — separate vocals and instruments easily",                              badge:"free", link:"https://lalal.ai",                           rating:4.4 },

  // ===== ✍️ WRITING AI =====
  { name:"Jasper AI",       icon:"🤖", cat:"writing",      desc:"Marketing content and copywriting AI — best tool for brands",                            badge:"paid", link:"https://jasper.ai",                          rating:4.4 },
  { name:"Copy.ai",         icon:"📋", cat:"writing",      desc:"AI writer for marketing copy and social media content",                                   badge:"free", link:"https://copy.ai",                            rating:4.3 },
  { name:"Writesonic",      icon:"✏️", cat:"writing",      desc:"AI content writer — writes blogs, ads and emails for you",                               badge:"paid", link:"https://writesonic.com",                     rating:4.3 },
  { name:"Grammarly AI",    icon:"🟢", cat:"writing",      desc:"Improve your writing — fix grammar, style and tone with AI",                             badge:"free", link:"https://grammarly.com",                      rating:4.5 },
  { name:"QuillBot",        icon:"🖊️", cat:"writing",      desc:"AI paraphrasing and summarizing tool — every student's best friend",                     badge:"free", link:"https://quillbot.com",                       rating:4.5 },
  { name:"Sudowrite",       icon:"📖", cat:"writing",      desc:"AI for fiction writers — get help writing stories and novels",                           badge:"paid", link:"https://sudowrite.com",                      rating:4.3 },
  { name:"NovelAI",         icon:"📚", cat:"writing",      desc:"AI storytelling and creative writing — best tool for fiction",                           badge:"paid", link:"https://novelai.net",                        rating:4.3 },
  { name:"Wordtune",        icon:"🎵", cat:"writing",      desc:"AI writing companion — instantly rewrite and improve any text",                          badge:"free", link:"https://wordtune.com",                       rating:4.3 },
  { name:"Rytr",            icon:"✍️", cat:"writing",      desc:"Affordable AI writer — 40+ use cases and 30+ languages supported",                       badge:"free", link:"https://rytr.me",                            rating:4.2 },
  { name:"Hyperwrite",      icon:"⚡", cat:"writing",      desc:"AI writing assistant — inline suggestions right in your browser",                        badge:"free", link:"https://hyperwriteai.com",                   rating:4.2 },

  // ===== ⚡ PRODUCTIVITY AI =====
  { name:"Notion AI",       icon:"📓", cat:"productivity", desc:"AI inside your notes and docs — writing, summarizing and databases",                     badge:"paid", link:"https://notion.so",                          rating:4.6 },
  { name:"Gamma",           icon:"📊", cat:"productivity", desc:"Create presentations with AI — professional slides ready in seconds",                    badge:"free", link:"https://try.gamma.app/90ljreetjhty",                          rating:4.7 },
  { name:"Otter.ai",        icon:"🦦", cat:"productivity", desc:"Meeting transcription AI — automatic notes and smart summaries",                         badge:"free", link:"https://otter.ai",                           rating:4.5 },
  { name:"Tome",            icon:"📖", cat:"productivity", desc:"AI storytelling and presentation tool — beautiful auto layouts",                         badge:"free", link:"https://tome.app",                           rating:4.4 },
  { name:"Beautiful.ai",    icon:"✨", cat:"productivity", desc:"Smart presentation designer — AI creates layouts automatically",                         badge:"paid", link:"https://beautiful.ai",                       rating:4.4 },
  { name:"Fireflies AI",    icon:"🔥", cat:"productivity", desc:"AI meeting notetaker — works on Zoom, Google Meet and Teams",                            badge:"free", link:"https://fireflies.ai",                       rating:4.5 },
  { name:"Taskade",         icon:"✅", cat:"productivity", desc:"AI project management — tasks, notes and team collaboration",                            badge:"free", link:"https://taskade.com",                        rating:4.3 },
  { name:"Reclaim AI",      icon:"📅", cat:"productivity", desc:"AI calendar scheduling — automatically finds the best meeting time",                     badge:"free", link:"https://reclaim.ai",                         rating:4.4 },
  { name:"Mem AI",          icon:"🧠", cat:"productivity", desc:"AI-powered notes — automatically organizes everything for you",                          badge:"paid", link:"https://mem.ai",                             rating:4.2 },
  { name:"Magical AI",      icon:"🪄", cat:"productivity", desc:"AI text expander — automate repetitive typing in your browser",                          badge:"free", link:"https://getmagical.com",                     rating:4.3 },

  // ===== 🧑 AVATAR & FUN AI =====
  { name:"D-ID",            icon:"🧑", cat:"avatar",       desc:"Create a talking avatar from a photo — perfect for presentations",                       badge:"paid", link:"https://d-id.com",                           rating:4.4 },
  { name:"Lensa AI",        icon:"🤳", cat:"avatar",       desc:"AI photo editing — create magical avatars from your selfie",                             badge:"paid", link:"https://prisma-ai.com/lensa",                rating:4.4 },
  { name:"Fotor AI Avatar", icon:"🎭", cat:"avatar",       desc:"AI avatar generator — create profile pictures in multiple styles",                       badge:"free", link:"https://fotor.com",                          rating:4.2 },
  { name:"Wombo Dream",     icon:"🌈", cat:"avatar",       desc:"Fun AI art generator — create art in any style you want",                                badge:"free", link:"https://wombo.art",                          rating:4.2 },
  { name:"Reface App",      icon:"😄", cat:"avatar",       desc:"Face swap AI — put your face into videos and GIFs",                                      badge:"free", link:"https://reface.app",                         rating:4.1 },
  { name:"This Person Does Not Exist", icon:"👻", cat:"avatar", desc:"AI generated realistic fake human faces — completely unique every time", badge:"free", link:"https://thispersondoesnotexist.com", rating:4.3 },

  // ============================================================
  // ⬇️ ADD NEW TOOLS HERE!
  // Copy the format from above and paste it here
  // ============================================================
];

// ============================================================
// CATEGORIES — To add a new category, just add it here!
// ============================================================
const categories = [
  { id:"all",          label:"🌐 All"           },
  { id:"chat",         label:"💬 Chat"          },
  { id:"image",        label:"🎨 Image"         },
  { id:"video",        label:"🎬 Video"         },
  { id:"code",         label:"💻 Code"          },
  { id:"voice",        label:"🎵 Voice & Music" },
  { id:"search",       label:"🔍 Search"        },
  { id:"productivity", label:"⚡ Productivity"  },
  { id:"writing",      label:"✍️ Writing"       },
  { id:"avatar",       label:"🧑 Avatar & Fun"  },
];
