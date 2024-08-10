"use strict";(self.webpackChunkneutralinojs_github_io=self.webpackChunkneutralinojs_github_io||[]).push([[1029],{1890:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(4848),t=n(8453);const s={title:"Distribution Overview"},l=void 0,c={id:"distribution/overview",title:"Distribution Overview",description:"There are several ways to distribute Neutralinojs apps: creating portable zip files, standalone setup files, and network-based",source:"@site/docs/distribution/overview.md",sourceDirName:"distribution",slug:"/distribution/overview",permalink:"/docs/distribution/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/distribution/overview.md",tags:[],version:"current",frontMatter:{title:"Distribution Overview"},sidebar:"docs",previous:{title:"Auto Updater",permalink:"/docs/how-to/auto-updater"},next:{title:"Framework Developer Guide",permalink:"/docs/contributing/framework-developer-guide"}},a={},d=[{value:"Application build results",id:"application-build-results",level:2},{value:"Selecting files for packaging",id:"selecting-files-for-packaging",level:2},{value:"Creating portable application packages using build scripts",id:"creating-portable-application-packages-using-build-scripts",level:2},{value:"Generating an application bundle for macOS",id:"generating-an-application-bundle-for-macos",level:3},{value:"Generating an application bundle for Windows",id:"generating-an-application-bundle-for-windows",level:3},{value:"Generating an application bundle for Linux",id:"generating-an-application-bundle-for-linux",level:3},{value:"Creating application installers",id:"creating-application-installers",level:2}];function o(e){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.p,{children:"There are several ways to distribute Neutralinojs apps: creating portable zip files, standalone setup files, and network-based\nsmall setup files. You can select an option according to your application distribution preference."}),"\n",(0,r.jsx)(i.h2,{id:"application-build-results",children:"Application build results"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"neu build"})," command generates the following files on any supported operating system into the ",(0,r.jsx)(i.code,{children:"dist"})," directory."]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Filename"}),(0,r.jsx)(i.th,{children:"OS"}),(0,r.jsx)(i.th,{children:"CPU architecture"}),(0,r.jsx)(i.th,{children:"Type"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"myapp-linux_x64"})}),(0,r.jsx)(i.td,{children:"Linux"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"x86_64"})}),(0,r.jsx)(i.td,{children:"Application binary"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"myapp-linux_armhf"})}),(0,r.jsx)(i.td,{children:"Linux"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"armhf"})}),(0,r.jsx)(i.td,{children:"Application binary"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"myapp-linux_arm64"})}),(0,r.jsx)(i.td,{children:"Linux"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"arm64"})}),(0,r.jsx)(i.td,{children:"Application binary"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"myapp-mac_x64"})}),(0,r.jsx)(i.td,{children:"macOS"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"x86_64"})}),(0,r.jsx)(i.td,{children:"Application binary (Intel)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"myapp-mac_universal"})}),(0,r.jsx)(i.td,{children:"macOS"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"x86_64"})," and ",(0,r.jsx)(i.code,{children:"arm64"})]}),(0,r.jsx)(i.td,{children:"Application binary"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"myapp-mac_arm64"})}),(0,r.jsx)(i.td,{children:"macOS"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"arm64"})}),(0,r.jsx)(i.td,{children:"Application binary (M1/M2/M3)"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"myapp-win_x64"})}),(0,r.jsx)(i.td,{children:"Windows"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"x86_64"})}),(0,r.jsx)(i.td,{children:"Application binary"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"resources.neu"})}),(0,r.jsx)(i.td,{children:"all"}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"N/A"})}),(0,r.jsx)(i.td,{children:"Application resource file"})]})]})]}),"\n",(0,r.jsxs)(i.p,{children:["Neutralinojs officially offers only pre-built ",(0,r.jsx)(i.code,{children:"x64"})," and ",(0,r.jsx)(i.code,{children:"armhf/arm64"})," Linux-only binaries.\nIf you need binaries for other CPU architectures, consider building binaries from the source\nwith ",(0,r.jsx)(i.a,{href:"/docs/contributing/framework-developer-guide",children:"this guide"}),". We are trying to officially support all CPU\narchitectures soon!"]}),"\n",(0,r.jsx)(i.h2,{id:"selecting-files-for-packaging",children:"Selecting files for packaging"}),"\n",(0,r.jsxs)(i.p,{children:["The neu CLI generates application binaries for all supported platforms at once. These binaries are pre-built binaries.\nTherefore, please check our\n",(0,r.jsx)(i.a,{href:"https://github.com/neutralinojs/neutralinojs/security/policy#prebuilt-binaries",children:"security policy"})," before you continue\nwith the distribution process."]}),"\n",(0,r.jsxs)(i.p,{children:["As the first step for packaging, you can pick two files for each targeted operating system: application binary and\nthe resource file. For example, if you need to make an application package for ",(0,r.jsx)(i.code,{children:"x64"})," Linux computers, pick ",(0,r.jsx)(i.code,{children:"myapp-linux_x64"}),"\nand the ",(0,r.jsx)(i.code,{children:"resources.neu"})," file. The ",(0,r.jsx)(i.code,{children:"resources.neu"})," contains all application resources, so, double click on the binary and check whether\nthe resource file is not corrupted."]}),"\n",(0,r.jsx)(i.h2,{id:"creating-portable-application-packages-using-build-scripts",children:"Creating portable application packages using build scripts"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.a,{href:"https://github.com/hschneider/neutralino-build-scripts/",children:(0,r.jsx)(i.code,{children:"hschneider/neutralino-build-scripts"})})," community project offers pre-developed build scripts for generating platform-specific application bundles. For example, it generates a standard app structure on GNU/Linux by generating ",(0,r.jsx)(i.code,{children:".desktop"})," file with app icon by also providing a shell script to install the app."]}),"\n",(0,r.jsx)(i.p,{children:"Clone the scripts to your root directory of your app folder to get started with Neutralinojs build scripts:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/hschneider/neutralino-build-scripts.git build-scripts\n"})}),"\n",(0,r.jsx)(i.p,{children:"Install jq, which is required for parsing JSON files:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"# On macOS:\nbrew install jq\n# On Linux or Windows/WSL:\nsudo apt-get install jq\n"})}),"\n",(0,r.jsxs)(i.p,{children:["Update ",(0,r.jsx)(i.code,{children:"neutralino.config.json"})," file with build scripts configuration as follows:"]}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-json",children:'  "buildScript": {\n    "mac": {\n      "architecture": ["x64", "arm64", "universal"],\n      "minimumOS": "10.13.0",\n      "appName": "myapp",\n      "appBundleName": "myapp",\n      "appIdentifier": "com.marketmix.ext.bun.demo",\n      "appIcon":  "resources/icons/icon.icns"\n    },\n    "win": {\n      "architecture": ["x64"],\n      "appName": "myapp",\n      "appIcon": "resources/icons/icon.ico"\n    },\n    "linux": {\n      "architecture": ["x64", "arm64", "armhf"],\n      "appName": "myapp",\n      "appIcon": "resources/icons/icon.png",\n      "appPath":  "/usr/share/myapp",\n      "appIconPath": "/usr/share/myapp/icon.png",\n      "appIconLocation": "/usr/share/myapp/icon.png"\n    }\n  }\n'})}),"\n",(0,r.jsx)(i.h3,{id:"generating-an-application-bundle-for-macos",children:"Generating an application bundle for macOS"}),"\n",(0,r.jsx)(i.p,{children:"You can generate a new application bundle for macOS by running the following command:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"./build-mac.sh\n"})}),"\n",(0,r.jsxs)(i.p,{children:["The build is created in the ",(0,r.jsx)(i.code,{children:"./dist"})," folder."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"buildScript/mac"})," JSON segment in the config-file contains the following fields:"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Key"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"architecture"}),(0,r.jsx)(i.td,{children:"This is an array of the architectures, you want to build. In our example we build all 3 architectures."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"minimumOS"}),(0,r.jsx)(i.td,{children:"The minimum macOS version."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appName"}),(0,r.jsx)(i.td,{children:"The app-name as displayed in the Finder."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appBundleName"}),(0,r.jsx)(i.td,{children:"The macOS app-bundle name."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appIdentifier"}),(0,r.jsx)(i.td,{children:"The macOS app-identifier."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appIcon"}),(0,r.jsxs)(i.td,{children:["Path to the app-icon in ",(0,r.jsx)(i.strong,{children:".icns"})," format. If only the filename is submitted, the file is expected in the project's root."]})]})]})]}),"\n",(0,r.jsxs)(i.p,{children:["Visit the ",(0,r.jsx)(i.a,{href:"https://github.com/hschneider/neutralino-build-scripts/#build-for-macos",children:"build scripts official documentation"})," for more details."]}),"\n",(0,r.jsx)(i.h3,{id:"generating-an-application-bundle-for-windows",children:"Generating an application bundle for Windows"}),"\n",(0,r.jsx)(i.p,{children:"You can generate a new application bundle for Windows by running the following command:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"./build-win.sh\n"})}),"\n",(0,r.jsxs)(i.p,{children:["The build is created in the ",(0,r.jsx)(i.code,{children:"./dist"})," folder."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:["You can now run install ",(0,r.jsx)(i.code,{children:"install-icon.cmd"})," to set the app icon as specifed in config file. This script required you to have ",(0,r.jsx)(i.a,{href:"https://www.angusj.com/resourcehacker/",children:"Resource Hacker"})," installed on your machine."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"buildScript/win"})," JSON segment in the config-file contains the following fields:"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Key"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"architecture"}),(0,r.jsx)(i.td,{children:"This is an array of the architectures, you want to build. Because Neutralino currently only support 'x64', you should leave this untouched."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appName"}),(0,r.jsx)(i.td,{children:"The app-name as displayed in the File Explorer, with or without .exe-suffix."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appIcon"}),(0,r.jsxs)(i.td,{children:["Path to the app-icon in ",(0,r.jsx)(i.strong,{children:".ico"})," format. If only the filename is submitted, the file is expected in the project's root. The icon is copied from this path into the app-bundle. To apply the icon to the executable file, you'll have to run ",(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.a,{href:"https://www.angusj.com/resourcehacker/",children:"Resource Hacker"})})," from a Windows machine. To do so, just double-click ",(0,r.jsx)(i.strong,{children:"install-icon.cmd"})," in the app-bundle."]})]})]})]}),"\n",(0,r.jsxs)(i.p,{children:["Visit the ",(0,r.jsx)(i.a,{href:"https://github.com/hschneider/neutralino-build-scripts/#build-for-windows",children:"build scripts official documentation"})," for more details."]}),"\n",(0,r.jsx)(i.h3,{id:"generating-an-application-bundle-for-linux",children:"Generating an application bundle for Linux"}),"\n",(0,r.jsx)(i.p,{children:"You can generate a new application bundle for GNU/Linux by running the following command:"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-bash",children:"./build-linux.sh\n"})}),"\n",(0,r.jsxs)(i.p,{children:["All build targets are created in the ",(0,r.jsx)(i.code,{children:"./dist"})," folder."]}),"\n",(0,r.jsxs)(i.blockquote,{children:["\n",(0,r.jsxs)(i.p,{children:["Calling ",(0,r.jsx)(i.code,{children:"sudo ./install.sh"})," from your build folder automatically installs the app to the locations you defined."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"buildScript/linux"})," JSON segment in the config-file contains the following fields:"]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Key"}),(0,r.jsx)(i.th,{children:"Description"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"architecture"}),(0,r.jsx)(i.td,{children:"This is an array of the architectures, you want to build. In our example we build all 3 architectures."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appName"}),(0,r.jsx)(i.td,{children:"The app-name as displayed in the File Explorer."})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appIcon"}),(0,r.jsxs)(i.td,{children:["Path to the app-icon in ",(0,r.jsx)(i.strong,{children:".png or .svg"})," format. If only the filename is submitted, the file is expected in the project's root. The icon is copied from this path into the app-bundle. Example: ",(0,r.jsx)(i.code,{children:"resources/icons/icon.png"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appPath"}),(0,r.jsxs)(i.td,{children:["The path of application directory in system where the source files will live ",(0,r.jsx)(i.strong,{children:"after"})," installing without the executable name and without ending slash. Example: ",(0,r.jsx)(i.code,{children:"/usr/share/myapp"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appIconPath"}),(0,r.jsxs)(i.td,{children:["This is path to application icon ",(0,r.jsx)(i.strong,{children:"after"})," the application has been installed in the Linux system. This path is written to the .desktop-file. Example: ",(0,r.jsx)(i.code,{children:"/usr/share/myapp/icon.png"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"appIconLocation"}),(0,r.jsx)(i.td,{children:"Same as appIconPath."})]})]})]}),"\n",(0,r.jsxs)(i.p,{children:["Visit the ",(0,r.jsx)(i.a,{href:"https://github.com/hschneider/neutralino-build-scripts/#build-for-linux",children:"build scripts official documentation"})," for more details."]}),"\n",(0,r.jsx)(i.h2,{id:"creating-application-installers",children:"Creating application installers"}),"\n",(0,r.jsx)(i.p,{children:"The following guides are not documented yet."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#",children:"Creating an application installer for Linux"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#",children:"Creating an application installer for macOS"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#",children:"Creating an application installer for Windows"})}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>l,x:()=>c});var r=n(6540);const t={},s=r.createContext(t);function l(e){const i=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),r.createElement(s.Provider,{value:i},e.children)}}}]);