import React from "react";

interface Props {

}
class SubItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  componentWillUnmount() {
    (window as any).api.contextMenu.clearRendererBindings();
  }

  componentDidMount() {
    // Set up binding in code whenever the context menu item
    // of id "alert" is selected
    (window as any).api.contextMenu.onReceive("softAlert", function(args: any) {
      console.log(`This alert was brought to you by secure-electron-context-menu by ${args.attributes.name}`);

      // Note - we have access to the "params" object as defined here: https://www.electronjs.org/docs/api/web-contents#event-context-menu
      // args.params
    }, (this.props as any).id);
  }

  render() {
    return (
      <div id="subitem">
        <div
          cm-template="softAlertTemplate"
          cm-id={(this.props as any).id}
          cm-payload-name={`Child (${(this.props as any).id})`}>
          ID ({(this.props as any).id}): Try right-clicking me for a custom context menu
        </div>
      </div>
    );
  }
}

export default SubItem;
