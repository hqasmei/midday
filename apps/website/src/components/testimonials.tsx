import { BlurryCircle } from "@/components/blurry-circle";
import { InfiniteMovingCards } from "@/components/infinite-moving-cards";

// const testimonials = [
//   {
//     name: "Marc Seitz — oss/acc",
//     avatarUrl:
//       "https://pbs.twimg.com/profile_images/1176854646343852032/iYnUXJ-m_400x400.jpg",
//     handle: "@mfts0",
//     verified: true,
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//   },
//   {
//     name: "Peer Richelsen — oss/acc",
//     avatarUrl:
//       "https://pbs.twimg.com/profile_images/1623291991709700097/aBL_VpMC_400x400.jpg",
//     handle: "@peer_rich",
//     verified: true,
//     quote:
//       "“Integer quis vestibulum lorem. Curabitur consectetur @nulla nec justo congue mattis. Nulla tincidunt ante eros, nec interdum dui varius quis. Maecenas sagittis dolor vel nibh malesuadazNulla tincidunt ante eros, nec interdum dui varius quis. Maecenas sagittis dolor” Maecenas sagittis dolor vel nibh malesuadaz",
//   },
//   {
//     name: "Paul Copplestone — e/postgres",
//     avatarUrl:
//       "https://pbs.twimg.com/profile_images/1664343166630109202/xcBMGPSE_400x400.jpg",
//     handle: "@kiwicopple",
//     verified: true,
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//   },
//   {
//     name: "Steven Tey",
//     avatarUrl:
//       "https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg",
//     handle: "@steventey",
//     verified: true,
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//   },
//   {
//     name: "félix malfait",
//     verified: true,
//     avatarUrl:
//       "https://pbs.twimg.com/profile_images/1248996603458961409/Dh5rQ44D_400x400.jpg",
//     handle: "@_felx",
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//   },
//   {
//     name: "Stevie Graham",
//     verified: true,
//     avatarUrl:
//       "https://pbs.twimg.com/profile_images/1246203840484929536/mGC2lxSa_400x400.jpg",
//     handle: "@stevegraham",
//     quote:
//       "Nothing more personally gratifying for me than seeing a beautifully designed app using @teller. Get yourselves on the @middayai waiting list now!",
//   },
//   // {
//   //   name: "Zeno Rocha",
//   //   avatarUrl:
//   //     "https://pbs.twimg.com/profile_images/1145166093029265408/9gJSVrQ7_400x400.jpg",
//   //   handle: "@zenorocha",
//   //   verified: true,
//   //   quote: "this is absolutely amazing",
//   // },
//   {
//     name: "Timur Ercan",
//     avatarUrl:
//       "https://pbs.twimg.com/profile_images/1382036502390181888/4BT30oTM_400x400.jpg",
//     handle: "@ElTimuro",
//     verified: true,
//     quote:
//       "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
//   },
// ];

const testimonials = [
  {
    name: "Lucas Grey",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1744288035314008064/kAQycMrk_400x400.png",
    handle: "@ImLucasGrey",
    verified: true,
    quote: "This is so ingenious and good!",
  },
  {
    name: "CodeHagen",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1706595242009387008/_mNR89Xa_400x400.jpg",
    handle: "@CodeHagen",
    verified: true,
    quote: "Well… This is to good 🔥",
  },
  {
    name: "Steven Tey",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1506792347840888834/dS-r50Je_400x400.jpg",
    handle: "@steventey",
    verified: true,
    quote: "That report page is absolutely gorgeous 😍",
  },
  {
    name: "Patrick Tobler",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1643364165627551744/Z92S8fqD_400x400.jpg",
    handle: "@Padierfind",
    verified: true,
    quote: "I love this",
  },
  {
    name: "Christian Alares",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1194368464946974728/1D2biimN_400x400.jpg",
    handle: "@c_alares",
    verified: true,
    quote: "Omg, this is so cool!",
  },
  {
    name: "Zeno Rocha",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1145166093029265408/9gJSVrQ7_400x400.jpg",
    handle: "@zenorocha",
    verified: true,
    quote: "this is absolutely amazing",
  },
  {
    name: "Bailey Simrell",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1488962358609330178/tdTC7o6M_400x400.jpg",
    handle: "@baileysimrell",
    verified: true,
    quote: "Awesome man, looks amazing 🔥",
  },
  {
    name: "Kyle @ KyTech",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1586538348964978689/nkpJWZxG_400x400.png",
    handle: "@KyTechInc",
    verified: true,
    quote: "so ready! 🙌",
  },
  {
    name: "Gokul",
    avatarUrl:
      "https://pbs.twimg.com/profile_images/1687344852600516608/gVS34j7h_400x400.jpg",
    handle: "@KyTechInc",
    verified: true,
    quote: "🖤 Awesome work. just love it.",
  },
];

export function Testimonials() {
  return (
    <div className="relative pb-22">
      <h3 className="text-4xl mb-8">What people say</h3>
      <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
      <BlurryCircle className="absolute top-2 right-[200px] bg-[#3633D0]/10 -z-10 hidden md:block" />
    </div>
  );
}
