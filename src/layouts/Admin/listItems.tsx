import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import CommentIcon from '@material-ui/icons/Comment';
import SettingsIcon from '@material-ui/icons/Settings';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import { useRouter } from 'next/router';

export const MainListItems: React.FC = () => {
	const router = useRouter();
	return (
		<div>
<ListItem button onClick={() => router.push('/admin/models/User')}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Transaction')}>
        <ListItemIcon>
          <ForumIcon />
        </ListItemIcon>
        <ListItemText primary="Transaction" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Purchase')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Purchase" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Transfers')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Transfers" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Inventory')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Inventory" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/ServerType')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="ServerType" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Server')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Server" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Product')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Product" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Promocodes')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Promocodes" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/urlSettings')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="urlSettings" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/baseSettings')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="baseSettings" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Token')}>
        <ListItemIcon>
          <CommentIcon />
        </ListItemIcon>
        <ListItemText primary="Token" />
      </ListItem>
		</div>
	);
};
