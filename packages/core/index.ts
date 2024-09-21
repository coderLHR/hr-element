import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "@hr-element/theme/index.css";
import components from "./components";
import makeInstaller from "./makeInstaller";
import printLogo from "./printLogo";

printLogo();

library.add(fas);
const installer = makeInstaller(components);

export * from "@hr-element/components";
export * from '@hr-element/locale';

export default installer;
