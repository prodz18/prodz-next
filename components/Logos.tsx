import {
    SiAndroid,
    SiAntdesign,
    SiBitbucket,
    SiBootstrap,
    SiCss3,
    SiCssmodules,
    SiDocker,
    SiExpress,
    SiGooglecloud,
    SiGit,
    SiGithub,
    SiGraphql,
    SiHtml5,
    SiIos,
    SiJavascript,
    SiJira,
    SiLess,
    SiMaterialdesign,
    SiMysql,
    SiNextdotjs,
    SiNodedotjs,
    SiPhp,
    SiPostgresql,
    SiPrisma,
    SiReact,
    SiRedux,
    SiRemix,
    SiScrutinizerci,
    SiSass,
    SiSequelize,
    SiShopify,
    SiSketch,
    SiStorybook,
    SiStrapi,
    SiStyledcomponents,
    SiSupabase,
    SiTailwindcss,
    SiTypescript,
    SiWordpress,
} from "react-icons/si";
import { GrCircleInformation } from "react-icons/gr";

interface LogosProps {
    name: string;
}

const Logo = (props: LogosProps) => {

    const { name } = props;

    switch(name){
        case 'android':
            return <SiAndroid />;
        case 'ant-design':
            return <SiAntdesign />;
        case 'bitbucket':
            return <SiBitbucket />;
        case 'bootstrap':
            return <SiBootstrap />;
        case 'css':
            return <SiCss3 />;
        case 'css-modules':
            return <SiCssmodules />;
        case 'docker':
            return <SiDocker />;
        case 'express':
            return <SiExpress />;
        case 'gcp':
            return <SiGooglecloud />;
        case 'git':
            return <SiGit />;
        case 'github':
            return <SiGithub />;
        case 'graphql':
            return <SiGraphql />;
        case 'html':
            return <SiHtml5 />;
        case 'ios':
            return <SiIos />;
        case 'javascript':
            return <SiJavascript />;
        case 'jira':
            return <SiJira />;
        case 'less':
            return <SiLess />;
        case 'material-design':
            return <SiMaterialdesign />;
        case 'mysql':
            return <SiMysql />;
        case 'next-js':
            return <SiNextdotjs />;
        case 'node-js':
            return <SiNodedotjs />;
        case 'php':
            return <SiPhp />;
        case 'postgresql':
            return <SiPostgresql />;
        case 'prisma':
            return <SiPrisma />;
        case 'react':
        case 'react-native':
            return <SiReact />;
        case 'redux':
            return <SiRedux />;
        case 'remix':
            return <SiRemix />;
        case 'sanity':
            return < SiScrutinizerci />;
        case 'sass':
            return <SiSass />;
        case 'sequelize':
            return <SiSequelize />;
        case 'shopify':
            return <SiShopify />;
        case 'sketch':
            return <SiSketch />;
        case 'storybook':
            return <SiStorybook />;
        case 'strapi':
            return <SiStrapi />;
        case 'styled-components':
            return <SiStyledcomponents />;
        case 'supabase':
            return <SiSupabase />;
        case 'tailwindcss':
            return <SiTailwindcss />;
        case 'typescript':
            return <SiTypescript />;
        case 'wordpress':
            return <SiWordpress />;
        default:
            return <GrCircleInformation />
    }
};

export default Logo;