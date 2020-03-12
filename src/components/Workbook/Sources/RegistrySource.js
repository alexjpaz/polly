import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PublicIcon from '@material-ui/icons/Public';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

// TODO - Need to extract and test
export function useFetchRegistryData() {
  const registryUrl = "/sample-registry.json"

  const [ registry, setRegistry ] = React.useState({
    workbooks: []
  });

  React.useEffect(() => {
    if(!registryUrl) {
      return;
    }

    const fetchData = async () => {
      const data = await fetch(registryUrl)
        .then(r => r.json())
      ;

      setRegistry(data);
    };

    fetchData();
  }, [ registryUrl ]);

  return [ registry, setRegistry ];
}

export function useFetchWorkbook() {
  const [ workbookUrl, setWorkbookUrl ] = React.useState(null);
  const [ workbook, setWorkbook ] = React.useState(null);

  React.useEffect(() => {
    if(!workbookUrl) {
      return;
    }

    const fetchData = async () => {
      const data = await fetch(workbookUrl)
        .then(r => r.json())
      ;

      setWorkbook(data);
    };

    fetchData();
  }, [ workbookUrl ]);


  return [ workbook, setWorkbookUrl ];
}

export function RegistryDialog({ open, onClose, onLoad }) {
  // TODO - Need to extract and test
  const [ registry ] = useFetchRegistryData();

  const [ workbook, fetchWorkbook ] = useFetchWorkbook();

  let workbookItems = [];

  const foo = (workbook) => (e) => {
    e.stopPropagation();
    fetchWorkbook(workbook.url)
  };

  React.useEffect(() => {
    if(workbook) {
      onLoad(workbook);
    }
  }, [ workbook, onLoad ])

  workbookItems = registry.workbooks.map((workbook) => (
    <ListItemText
      key={workbook.name}
      primary={workbook.name}
      secondary={[workbook.description, workbook.url].join(' – ')}
      onClick={foo(workbook)} />
  ));

  return (
    <Dialog fullScreen={true} open={open} onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogContent>
        <List component="nav">
          <ListItem button>
            {workbookItems}
          </ListItem>
        </List>
      </DialogContent>
    </Dialog>
  );
}

export function RegistrySource({ onSourceChange }) {
  const [ open, setOpen ] = React.useState(false);

  const onClick = (e) => {
    e.stopPropagation();
    setOpen(true);
  };

  const onLoad = (data) => {
    setOpen(false);
    onSourceChange(data);
  };

  const onClose = (e) => {
    e.stopPropagation();
    setOpen(false);
  };

  return (
    <ListItem button onClick={onClick}>
      <ListItemIcon>
        <PublicIcon />
      </ListItemIcon>
      <ListItemText primary='Registry' secondary='Load workbooks from the public registry' />
      <RegistryDialog open={open} onLoad={onLoad} onClose={onClose} />
    </ListItem>
  );
}
