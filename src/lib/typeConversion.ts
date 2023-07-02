export const pbType = (oldType: string) => {
  switch (oldType) {
    case "fanbook":
      return "i9p8scjsqublfua";
    case "encyclopedia":
      return "ey71xs6rbjif9w6";
    case "artbook":
      return "tpjqaftrmnfi0qz";
    case "goods":
      return "vwq4nhmnnjtxvwq";
    case "novel":
      return "rm1vepkhubfjlen";
    case "light-novel":
      return "73hx8goiqg8kqjh";
    case "comic":
      return "ijzvx72ftvfmax4";
    case "manhua":
      return "dyf4wfbemnsdhdy";
    case "manhwa":
      return "8f25aho6twh3t45";
    case "manga":
      return "tt6995wq46wqxkr";
    default:
      return null;
  }
};

export const pbPublisher = (oldPublisher: string) => {
  switch (oldPublisher) {
    case "usagi":
      return "cpb5rgaf1ct18a3";
    case "daisy":
      return "g1thxgymknqqwwa";
    case "yuki":
      return "l96x3ar13t1i1do";
    case "ai":
      return "3bmd7kc58za01s2";
    case "shine":
      return "fw6h526f9uny681";
    case "nhanam":
      return "zqgjpvi5jk91fkf";
    case "mori":
      return "n9xmati0k0bruru";
    case "hikari":
      return "ecpq1rsweap1veq";
    case "tsuki":
      return "vn941cs1ejkx9iz";
    case "ichi":
      return "ti7ozd0loidk1a0";
    case "uranix":
      return "9w5w8cez2mpwjg4";
    case "sky":
      return "hbmvknd22ailgs4";
    case "wingsbooks":
      return "d6swmpfxtg8rrd0";
    case "amak":
      return "jdten201f5rs7ek";
    case "ipm":
      return "lmvlz3ju4j7u0fu";
    case "tre":
      return "rg2c9kpuut5ykun";
    case "kim":
      return "spfxx9vi34n1no5";
    default:
      return null;
  }
};

export const pbStatus = (oldStatus: string) => {
  switch (oldStatus) {
    case "Licensed":
      return "LICENSED";
    case "Published":
      return "ON_GOING";
    case "Finished":
      return "COMPLETED";
    default:
      return null;
  }
};
