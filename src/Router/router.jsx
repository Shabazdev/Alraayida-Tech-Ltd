import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Mainlayout from "../Layout/Mainlayout";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import WebDevelopment from "../pages/Services/WebDevelopment/WebDevelopment";
import Figma from "../pages/Services/UiuX/Ui/Figma";
import GraphicsDesigner from "../pages/Services/GraphicsDesign/GrapicsDesigner/GraphicsDesigner";
import DigitalMarketer from "../pages/Services/DigitalMarketing/DigitalMarketer/DigitalMarketer";
import CrmandSaas from "../pages/Services/Crm/CrmandSass/CrmandSaas";
import VideoProductions from "../pages/Services/VideoProduction/VideoProductions/VideoProductions";
import Branding from "../pages/Services/BrandingSection/Branding/Branding";
import Blog from "../pages/Blog/Blog";
import CareerBanner from "../pages/CareerPage/CareerBanner/CareerBanner";
import Career from "../pages/CareerPage/Career/Career";
import SeoApply from "../pages/CareerPage/CurrentOpenning/SeoApply/SeoApply";
import UiuxApply from "../pages/CareerPage/CurrentOpenning/UiuxApply/UiuxApply";
import Calendly from "../pages/About/Calendly/Calendly";
import ContactUs from "../pages/ContactUs/ContactUs";
import AnotherBlog from "../pages/Blog/AnotherBlog/AnotherBlog";

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<Error></Error>,
      element: <Mainlayout></Mainlayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },

        {
          path:'/blogs',
          element:<Blog></Blog>
        },

        {
          path:'/career',
          element:<Career></Career>
        },

        {
          path:'/contactUs',
          element:<ContactUs></ContactUs>
        },

        {
          path:'/seo',
          element:<SeoApply></SeoApply>
        },
        {
          path:'/uiuxApply',
          element:<UiuxApply></UiuxApply>
        },
        // dropdown for service page
        {
          path:'/service/web',
          element:<WebDevelopment></WebDevelopment>
        },

        {
          path:'/service/uiux',
          element:<Figma></Figma>,
        },

        {
          path:'/service/GraphicsDesign',
          element:<GraphicsDesigner></GraphicsDesigner>
        },
        {
          path:'/service/digitalMarketing',
          element:<DigitalMarketer></DigitalMarketer>
        },
        {
          path:'/service/crm',
          element:<CrmandSaas></CrmandSaas>
        },
        {
          path:'/service/video',
          element:<VideoProductions></VideoProductions>
        },

        {
          path:'/service/branding',
          element:<Branding></Branding>
        },

        {
          path:'/anotherBlog',
          element:<AnotherBlog></AnotherBlog>
        },

      ],

    
    },

    {
      path:'/calendly',
      element:<Calendly></Calendly>
     
    },
  ]);

  export default router;