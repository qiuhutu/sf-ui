<template>
  <div id="app">
    <sf-container style="color: white; margin-bottom:50px;">
      <sf-header style="background:lightskyblue;">header</sf-header>
      <sf-container>
        <sf-aside style="background:#ddd; color: black;" width="100">aside</sf-aside>
        <sf-content style="color: black;">
          <sf-row aign="start">
            <sf-col :span="24">content</sf-col>
          </sf-row>
          <sf-row align="space-between">
            <sf-col :span="3">
              <sf-button size="medium" type="default">Default</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="medium" type="primary">Primary</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="medium" type="secondary">Secondary</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="medium" type="success">Success</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="medium" type="warning">Warning</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="medium" type="error">Error</sf-button>
            </sf-col>
          </sf-row>
          <sf-row align="start" style="margin-top: 20px;">
            <sf-col :span="5">
              <sf-button size="large" type="primary">Large</sf-button>
            </sf-col>
            <sf-col :span="4">
              <sf-button size="medium" type="primary">Medium</sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button size="small" type="primary">Small</sf-button>
            </sf-col>
          </sf-row>
          <sf-row align="start" style="margin-top: 20px;">
            <sf-col :span="3">
              <sf-button type="primary" round>Round</sf-button>
            </sf-col>
            <sf-col :span="2">
              <sf-button type="primary" circle>
                <sf-icon name="plus"></sf-icon>
              </sf-button>
            </sf-col>
            <sf-col :span="3">
              <sf-button-group>
                <sf-button loading>Round</sf-button>
                <sf-button>Default</sf-button>
                <sf-button loading iconPosition="right">Round</sf-button>
              </sf-button-group>
            </sf-col>
          </sf-row>
        </sf-content>
      </sf-container>
      <sf-footer style="background:lightskyblue;">footer</sf-footer>
    </sf-container>
    <sf-icon name="close"></sf-icon>
    <sf-title isUpperCase level="1">背影 1</sf-title>
    <sf-title isUpperCase level="2">背影 2</sf-title>
    <sf-title isUpperCase level="3">背影 3</sf-title>
    <sf-title isUpperCase level="4">背影 4</sf-title>
    <sf-title isUpperCase level="5">背影 5</sf-title>
    <sf-title isUpperCase level="6">背影 6</sf-title>
    <br />
    <hr />
    <sf-text>朱自清</sf-text>
    <br />
    <sf-text type="secondary">朱自清</sf-text>
    <br />
    <sf-text type="success">朱自清</sf-text>
    <br />
    <sf-text type="warning">朱自清</sf-text>
    <br />
    <sf-text type="error">朱自清</sf-text>
    <br />
    <sf-text disabled>朱自清</sf-text>
    <br />
    <sf-text mark>朱自清</sf-text>
    <br />
    <sf-text code>朱自清</sf-text>
    <br />
    <sf-text underline>朱自清</sf-text>
    <br />
    <sf-text delete>朱自清</sf-text>
    <br />
    <sf-text strong>朱自清</sf-text>
    <br />
    <br />
    <hr />
    <sf-paragraph mark>我与父亲不相见已二年余了，我最不能忘记的是他的背影。</sf-paragraph>
    <sf-paragraph
      underline
    >那年冬天，祖母死了，父亲的差使也交卸了，正是祸不单行的日子。我从北京到徐州，打算跟着父亲奔丧回家。到徐州见着父亲，看见满院狼藉的东西，又想起祖母，不禁簌簌地流下眼泪。父亲说：“事已如此，不必难过，好在天无绝人之路！”</sf-paragraph>
    <sf-paragraph
      delete
    >回家变卖典质，父亲还了亏空；又借钱办了丧事。这些日子，家中光景很是惨澹，一半为了丧事，一半为了父亲赋闲6。丧事完毕，父亲要到南京谋事，我也要回北京念书，我们便同行。</sf-paragraph>
    <sf-paragraph
      strong
    >到南京时，有朋友约去游逛，勾留了一日；第二日上午便须渡江到浦口，下午上车北去。父亲因为事忙，本已说定不送我，叫旅馆里一个熟识的茶房陪我同去。他再三嘱咐茶房，甚是仔细。但他终于不放心，怕茶房不妥帖；颇踌躇了一会。其实我那年已二十岁，北京已来往过两三次，是没有什么要紧的了。他踌躇了一会，终于决定还是自己送我去。我再三劝他不必去；他只说：“不要紧，他们去不好！”</sf-paragraph>
    <sf-paragraph type="secondary">
      我们过了江，进了车站。我买票，他忙着照看行李。行李太多，得向脚夫行些小费才可过去。他便又忙着和他们讲价钱。我那时真是聪明过分，总觉他说话不大漂亮，非自己插嘴不可，但他终于讲定了价钱；就送我上车。他给我拣定了靠车门的一张椅子；我将他给我做的紫毛大衣铺好座位。他嘱我路上小心，夜里要警醒些，不要受凉。又嘱托茶房好好照应我。我心里暗笑他的迂；他们只认得钱，托他们只是白托！而且我这样大年纪的人，难道还不能料理自己么？我现在想想，我那时真是
      <sf-text type="error">太聪明</sf-text>了。
    </sf-paragraph>
    <sf-paragraph
      disabled
    >我说道：“爸爸，你走吧。”他望车外看了看，说：“我买几个橘子去。你就在此地，不要走动。”我看那边月台的栅栏外有几个卖东西的等着顾客。走到那边月台，须穿过铁道，须跳下去又爬上去。父亲是一个胖子，走过去自然要费事些。我本来要去的，他不肯，只好让他去。我看见他戴着黑布小帽，穿着黑布大马褂12，深青布棉袍，蹒跚地走到铁道边，慢慢探身下去，尚不大难。可是他穿过铁道，要爬上那边月台，就不容易了。他用两手攀着上面，两脚再向上缩；他肥胖的身子向左微倾，显出努力的样子。这时我看见他的背影，我的泪很快地流下来了。我赶紧拭干了泪。怕他看见，也怕别人看见。我再向外看时，他已抱了朱红的橘子往回走了。过铁道时，他先将橘子散放在地上，自己慢慢爬下，再抱起橘子走。到这边时，我赶紧去搀他。他和我走到车上，将橘子一股脑儿放在我的皮大衣上。于是扑扑衣上的泥土，心里很轻松似的。过一会儿说：“我走了，到那边来信！”我望着他走出去。他走了几步，回过头看见我，说：“进去吧，里边没人。”等他的背影混入来来往往的人里，再找不着了，我便进来坐下，我的眼泪又来了。</sf-paragraph>
    <sf-paragraph
      ellipsis
    >近几年来，父亲和我都是东奔西走，家中光景是一日不如一日。他少年出外谋生，独力支持，做了许多大事。哪知老境却如此颓唐！他触目伤怀，自然情不能自已。情郁于中，自然要发之于外；家庭琐屑便往往触他之怒。他待我渐渐不同往日。但最近两年不见，他终于忘却我的不好，只是惦记着我，惦记着他的儿子。我北来后，他写了一信给我，信中说道：“我身体平安，惟膀子疼痛厉害，举箸提笔，诸多不便，大约大去之期不远矣。”我读到此处，在晶莹的泪光中，又看见那肥胖的、青布棉袍黑布马褂的背影。唉！我不知何时再能与他相见！</sf-paragraph>
    <sf-paragraph
      :ellipsis="{rows: 2, expandable: true}"
    >近几年来，父 亲和我 都 是东奔西走，家中光景是一日不如一日。他少年出外谋生，独力支持，做了许多大事。哪知老境却如此颓唐！他触目伤怀，自然情不能自已。情郁于中，自然要发之于外；家庭琐屑便往往触他之怒。他待我渐渐不同往日。但最近两年不见，他终于忘却我的不好，只是惦记着我，惦记着他的儿子。我北来后，他写了一信给我，信中说道：“我身体平安，惟膀子疼痛厉害，举箸提笔，诸多不便，大约大去之期不远矣。”我读到此处，在晶莹的泪光中，又看见那肥胖的、青布棉袍黑布马褂的背影。唉！我不知何时再能与他相见！</sf-paragraph>
    <sf-link href="#" disabled>Text Link</sf-link>
    <sf-link type="primary">Text Link</sf-link>
    <sf-link type="success">Text Link</sf-link>
    <sf-link type="warning">Text Link</sf-link>
    <sf-link type="error">Text Link</sf-link>
    <sf-link :underline="false">Text Link</sf-link>
  </div>
</template>

<script>
import "./styles/app.scss";
import SfButton from "./components/basic/button/button";
import SfButtonGroup from "./components/basic/button/button-group";
import SfContent from "@/components/basic/layout/content";
import SfHeader from "@/components/basic/layout/header";
import SfContainer from "@/components/basic/layout/container";
import SfFooter from "@/components/basic/layout/footer";
import SfAside from "@/components/basic/layout/aside";
import SfRow from "@/components/basic/grid/row";
import SfCol from "@/components/basic/grid/col";
import SfIcon from "@/components/basic/icon/icon";
import SfTitle from "@/components/basic/typography/title";
import SfText from "@/components/basic/typography/text";
import SfParagraph from "@/components/basic/typography/paragraph";
import SfLink from "@/components/basic/link/link";

export default {
  name: "app",
  components: {
    "sf-button": SfButton,
    "sf-button-group": SfButtonGroup,
    "sf-content": SfContent,
    "sf-header": SfHeader,
    "sf-container": SfContainer,
    "sf-footer": SfFooter,
    "sf-aside": SfAside,
    "sf-row": SfRow,
    "sf-col": SfCol,
    "sf-icon": SfIcon,
    "sf-title": SfTitle,
    "sf-text": SfText,
    "sf-paragraph": SfParagraph,
    "sf-link": SfLink
  }
};
</script>

<style lang="scss">
</style>
