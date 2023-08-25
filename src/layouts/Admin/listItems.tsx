import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import StorageIcon from '@material-ui/icons/Storage';
import StorefrontIcon from '@material-ui/icons/Storefront';
import DnsIcon from '@material-ui/icons/Dns';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PersonIcon from '@material-ui/icons/Person';
import SignalCellularAltIcon from '@material-ui/icons/SignalCellularAlt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon2 from '@material-ui/icons/Settings';
import { useRouter } from 'next/router';

export const MainListItems: React.FC = () => {
  const router = useRouter();
  return (
    <div>
      <ListItem button onClick={() => router.push('/admin/statistics')}>
        <ListItemIcon>
          <SignalCellularAltIcon />
        </ListItemIcon>
        <ListItemText primary="Cтатистика" />
      </ListItem>
      <ListItem button onClick={() => router.push('/admin/models/User')}>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="User" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Transaction')}>
        <ListItemIcon>
          <AttachMoneyIcon />
        </ListItemIcon>
        <ListItemText primary="Transaction" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Purchase')}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Purchase" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Transfers')}>
        <ListItemIcon>
          <PeopleAltIcon />
        </ListItemIcon>
        <ListItemText primary="Transfers" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Inventory')}>
        <ListItemIcon>
          <ShoppingBasketIcon />
        </ListItemIcon>
        <ListItemText primary="Inventory" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/ServerType')}>
        <ListItemIcon>
          <StorageIcon />
        </ListItemIcon>
        <ListItemText primary="ServerType" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Server')}>
        <ListItemIcon>
          <DnsIcon />
        </ListItemIcon>
        <ListItemText primary="Server" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Product')}>
        <ListItemIcon>
          <StorefrontIcon />
        </ListItemIcon>
        <ListItemText primary="Product" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Promocodes')}>
        <ListItemIcon>
          <LoyaltyIcon />
        </ListItemIcon>
        <ListItemText primary="Promocodes" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/urlSettings')}>
        <ListItemIcon>
          <SettingsIcon2 />
        </ListItemIcon>
        <ListItemText primary="urlSettings" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/baseSettings')}>
        <ListItemIcon>
          <SettingsIcon2 />
        </ListItemIcon>
        <ListItemText primary="baseSettings" />
      </ListItem>

      <ListItem button onClick={() => router.push('/admin/models/Token')}>
        <ListItemIcon>
          <AccountCircleIcon />
        </ListItemIcon>
        <ListItemText primary="Token" />
      </ListItem>
    </div>
  );
};
