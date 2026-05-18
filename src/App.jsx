import { Button, MainWindow, ThemeProvider } from '@jetbrains/int-ui-kit';
import conflictDialogImage from '../img/Conflict dialog.png';
import magicResolveToolbarIcon from '../../int-ui-kit-for-web/src/icons/diff/magicResolveToolbar_dark.svg';
import './App.css';

export default function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <main className="dialog-demo-screen">
        <div className="main-window-layer">
          <MainWindow
            projectName="commons-math"
            projectIcon="CM"
            projectColor="grass"
            branchName="feature/resolve-conflicts"
            runConfig="IDEA Community"
            height="100%"
            defaultOpenToolWindows={['project']}
          />

          <div className="conflict-dialog-image-layer">
            <div className="conflict-dialog-image-frame">
              <img
                className="conflict-dialog-image"
                src={conflictDialogImage}
                alt=""
              />
              <Button className="conflict-dialog-button">
                <img
                  className="conflict-dialog-button-icon"
                  src={magicResolveToolbarIcon}
                  alt=""
                />
                <span>Resolve All Simple Conflicts</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}
