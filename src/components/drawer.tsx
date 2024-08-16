import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { Avatar, IconButton, Typography } from '@mui/material';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';

interface ClippedDrawerProps {
    children: React.ReactNode;
}

const ClippedDrawer: React.FC<ClippedDrawerProps> = (props) => {
    const router = useRouter();
    const [openUsermanagementMenu, setOpenUsermanagementMenu] = React.useState<string | null>(null);
    const [openBasicInformationMenu, setOpenBasicInformationMenu] = React.useState<string | null>(null);
    const [openPurchasingMenu, setOpenPurchasingMenu] = React.useState<string | null>(null);
    const [openSalesMenu, setOpenSalesMenu] = React.useState<string | null>(null);
    const [openStockMenu, setOpenStockMenu] = React.useState<string | null>(null);
    const [openReportsMenu, setOpenReportsMenu] = React.useState<string | null>(null);
    const [openMonthlyMenu, setOpenMonthlyMenu] = React.useState<string | null>(null);
    const [openYearlyMenu, setOpenYearlyMenu] = React.useState<string | null>(null);

    const handleNavigation = (path: string) => {
        router.push(path);
    };

    const isActive = (path: string) => router.pathname === path;

    const toggleUsermanagementMenu = (menu: string) => {
        setOpenUsermanagementMenu(openUsermanagementMenu === menu ? null : menu);
    };

    const toggleBasicInformationMenu = (menu: string) => {
        setOpenBasicInformationMenu(openBasicInformationMenu === menu ? null : menu);
    };

    const togglePurchasingMenu = (menu: string) => {
        setOpenPurchasingMenu(openPurchasingMenu === menu ? null : menu);
    };

    const toggleSalesMenu = (menu: string) => {
        setOpenSalesMenu(openSalesMenu === menu ? null : menu);
    };

    const toggleStockMenu = (menu: string) => {
        setOpenStockMenu(openStockMenu === menu ? null : menu);
    };

    const toggleReportsMenu = (menu: string) => {
        setOpenReportsMenu(openReportsMenu === menu ? null : menu);
    };

    const toggleMonthlyMenu = (menu: string) => {
        setOpenMonthlyMenu(openMonthlyMenu === menu ? null : menu);
    };

    const toggleYearlyMenu = (menu: string) => {
        setOpenYearlyMenu(openYearlyMenu === menu ? null : menu);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    height: '60px',
                    backgroundColor: '#fff',
                    display: 'flex',
                    alignItems: 'center ',
                    flexDirection: 'row',
                    pl: '18px',
                    pr: '18px',
                }}>
                <img
                    src='/logogoodapp.png'
                    style={{ width: '178px', height: '78px', cursor: 'pointer' }}
                    onClick={() => handleNavigation('/')}
                />
                <Typography sx={{ color: '#2384C6', fontWeight: '600', fontSize: '20px', ml: 'auto', fontFamily: 'inter' }}>
                    Inventory
                </Typography>
                <Box sx={{ ml: 'auto', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <IconButton
                        sx={{ ml: '8px' }}
                        onClick={() => handleNavigation('/settings')}
                    >
                        <SettingsOutlinedIcon sx={{ color: '#5E6278' }} />
                    </IconButton>
                    <IconButton>
                        <NotificationsOutlinedIcon sx={{ color: '#5E6278' }} />
                    </IconButton>
                    <Avatar sx={{ height: '40px', width: '40px', ml: '8px' }} />
                </Box>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: '204px',
                    [`& .MuiDrawer-paper`]: {
                        width: '204px',
                        top: '70px',
                        borderRadius: '0 30px 30px 0',
                        background: 'linear-gradient(to bottom, #754C27, #ad7a2c)',
                    },
                }}
            >
                <Box sx={{ overflow: 'auto', p: '0px 10px' }}>
                    <List sx={{ mt: '18px' }}>
                        {/* User Management Menu */}
                        <ListItemButton
                            onClick={() => toggleUsermanagementMenu('userManagement')}
                            sx={{
                                backgroundColor: isActive('/roomlayout') ? '#E2F2FC' : 'inherit',
                                '& .MuiListItemIcon-root': {
                                    color: isActive('/roomlayout') ? '#2384C6' : 'white',
                                },
                                '& .MuiListItemText-primary': {
                                    color: isActive('/roomlayout') ? '#2384C6' : 'white',
                                },
                                '&:hover': {
                                    backgroundColor: isActive('/roomlayout') ? '#ffffff' : 'inherit',
                                    '& .MuiListItemIcon-root': {
                                        color: '#ffffff',
                                    },
                                },
                                borderRadius: '5px',
                            }}
                        >
                            <ListItemText primary="User Management" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                            {openUsermanagementMenu === 'userManagement' ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color:'white' }} />}
                        </ListItemButton>
                        {openUsermanagementMenu === 'userManagement' && (
                            <Box sx={{ pl: 4 }}>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/user-management')}
                                >
                                    <ListItemText primary="Users" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/roles')}
                                >
                                    <ListItemText primary="Roles" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                            </Box>
                        )}

                        {/* Basic Information Menu */}
                        <ListItemButton
                            onClick={() => toggleBasicInformationMenu('basicInformation')}
                            sx={{
                                backgroundColor: isActive('/basic-information') ? '#E2F2FC' : 'inherit',
                                '& .MuiListItemIcon-root': {
                                    color: isActive('/basic-information') ? '#2384C6' : 'white',
                                },
                                '& .MuiListItemText-primary': {
                                    color: isActive('/basic-information') ? '#2384C6' : 'white',
                                },
                                '&:hover': {
                                    backgroundColor: isActive('/basic-information') ? '#ffffff' : 'inherit',
                                    '& .MuiListItemIcon-root': {
                                        color: '#ffffff',
                                    },
                                },
                                borderRadius: '5px',
                            }}
                        >
                            <ListItemText primary="Basic Information" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                            {openBasicInformationMenu === 'basicInformation' ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color:'white' }} />}
                        </ListItemButton>
                        {openBasicInformationMenu === 'basicInformation' && (
                            <Box sx={{ pl: 4 }}>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/department-names')}
                                >
                                    <ListItemText primary="Department Names" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/units')}
                                >
                                    <ListItemText primary="Units of Measurement" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/product-types')}
                                >
                                    <ListItemText primary="Product Types" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/products')}
                                >
                                    <ListItemText primary="Products" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/suppliers')}
                                >
                                    <ListItemText primary="Suppliers" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/customers')}
                                >
                                    <ListItemText primary="Customers" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                            </Box>
                        )}

                        {/* Purchasing Menu */}
                        <ListItemButton
                            onClick={() => togglePurchasingMenu('purchasing')}
                            sx={{
                                backgroundColor: isActive('/purchasing') ? '#E2F2FC' : 'inherit',
                                '& .MuiListItemIcon-root': {
                                    color: isActive('/purchasing') ? '#2384C6' : 'white',
                                },
                                '& .MuiListItemText-primary': {
                                    color: isActive('/purchasing') ? '#2384C6' : 'white',
                                },
                                '&:hover': {
                                    backgroundColor: isActive('/purchasing') ? '#ffffff' : 'inherit',
                                    '& .MuiListItemIcon-root': {
                                        color: '#ffffff',
                                    },
                                },
                                borderRadius: '5px',
                            }}
                        >
                            <ListItemText primary="Purchasing" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                            {openPurchasingMenu === 'purchasing' ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color:'white' }} />}
                        </ListItemButton>
                        {openPurchasingMenu === 'purchasing' && (
                            <Box sx={{ pl: 4 }}>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/goods-receipt')}
                                >
                                    <ListItemText primary="Goods Receipt" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                            </Box>
                        )}

                        {/* Sales Menu */}
                        <ListItemButton
                            onClick={() => toggleSalesMenu('sales')}
                            sx={{
                                backgroundColor: isActive('/sales') ? '#E2F2FC' : 'inherit',
                                '& .MuiListItemIcon-root': {
                                    color: isActive('/sales') ? '#2384C6' : 'white',
                                },
                                '& .MuiListItemText-primary': {
                                    color: isActive('/sales') ? '#2384C6' : 'white',
                                },
                                '&:hover': {
                                    backgroundColor: isActive('/sales') ? '#ffffff' : 'inherit',
                                    '& .MuiListItemIcon-root': {
                                        color: '#ffffff',
                                    },
                                },
                                borderRadius: '5px',
                            }}
                        >
                            <ListItemText primary="Sales" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                            {openSalesMenu === 'sales' ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color:'white' }} />}
                        </ListItemButton>
                        {openSalesMenu === 'sales' && (
                            <Box sx={{ pl: 4 }}>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/cash-bill')}
                                >
                                    <ListItemText primary="Cash Bill" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/delivery-note')}
                                >
                                    <ListItemText primary="Delivery Note" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/receipt')}
                                >
                                    <ListItemText primary="Receipt" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                            </Box>
                        )}

                        {/* Stock Menu */}
                        <ListItemButton
                            onClick={() => toggleStockMenu('stock')}
                            sx={{
                                backgroundColor: isActive('/stock') ? '#E2F2FC' : 'inherit',
                                '& .MuiListItemIcon-root': {
                                    color: isActive('/stock') ? '#2384C6' : 'white',
                                },
                                '& .MuiListItemText-primary': {
                                    color: isActive('/stock') ? '#2384C6' : 'white',
                                },
                                '&:hover': {
                                    backgroundColor: isActive('/stock') ? '#ffffff' : 'inherit',
                                    '& .MuiListItemIcon-root': {
                                        color: '#ffffff',
                                    },
                                },
                                borderRadius: '5px',
                            }}
                        >
                            <ListItemText primary="Stock" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                            {openStockMenu === 'stock' ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color:'white' }} />}
                        </ListItemButton>
                        {openStockMenu === 'stock' && (
                            <Box sx={{ pl: 4 }}>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/stock-count')}
                                >
                                    <ListItemText primary="Stock Count Sheet" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/stock-card')}
                                >
                                    <ListItemText primary="Stock Card" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/inventory-report')}
                                >
                                    <ListItemText primary="Inventory Report" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                            </Box>
                        )}

                        {/* Reports Menu */}
                        <ListItemButton
                            onClick={() => toggleReportsMenu('reports')}
                            sx={{
                                backgroundColor: isActive('/reports') ? '#E2F2FC' : 'inherit',
                                '& .MuiListItemIcon-root': {
                                    color: isActive('/reports') ? '#2384C6' : 'white',
                                },
                                '& .MuiListItemText-primary': {
                                    color: isActive('/reports') ? '#2384C6' : 'white',
                                },
                                '&:hover': {
                                    backgroundColor: isActive('/reports') ? '#ffffff' : 'inherit',
                                    '& .MuiListItemIcon-root': {
                                        color: '#ffffff',
                                    },
                                },
                                borderRadius: '5px',
                            }}
                        >
                            <ListItemText primary="Reports" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                            {openReportsMenu === 'reports' ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color:'white' }} />}
                        </ListItemButton>
                        {openReportsMenu === 'reports' && (
                            <Box sx={{ pl: 4 }}>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/goods-receipt-report')}
                                >
                                    <ListItemText primary="Goods Receipt Report" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/cash-bill-report')}
                                >
                                    <ListItemText primary="Cash Bill Report" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/delivery-note-report')}
                                >
                                    <ListItemText primary="Delivery Note Report" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                            </Box>
                        )}

                        {/* Monthly Menu */}
                        <ListItemButton
                            onClick={() => toggleMonthlyMenu('monthly')}
                            sx={{
                                backgroundColor: isActive('/monthly') ? '#E2F2FC' : 'inherit',
                                '& .MuiListItemIcon-root': {
                                    color: isActive('/monthly') ? '#2384C6' : 'white',
                                },
                                '& .MuiListItemText-primary': {
                                    color: isActive('/monthly') ? '#2384C6' : 'white',
                                },
                                '&:hover': {
                                    backgroundColor: isActive('/monthly') ? '#ffffff' : 'inherit',
                                    '& .MuiListItemIcon-root': {
                                        color: '#ffffff',
                                    },
                                },
                                borderRadius: '5px',
                            }}
                        >
                            <ListItemText primary="Monthly" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                            {openMonthlyMenu === 'monthly' ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color:'white' }} />}
                        </ListItemButton>
                        {openMonthlyMenu === 'monthly' && (
                            <Box sx={{ pl: 4 }}>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/close-monthly-period')}
                                >
                                    <ListItemText primary="Close Monthly Period" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                            </Box>
                        )}

                        {/* Yearly Menu */}
                        <ListItemButton
                            onClick={() => toggleYearlyMenu('yearly')}
                            sx={{
                                backgroundColor: isActive('/yearly') ? '#E2F2FC' : 'inherit',
                                '& .MuiListItemIcon-root': {
                                    color: isActive('/yearly') ? '#2384C6' : 'white',
                                },
                                '& .MuiListItemText-primary': {
                                    color: isActive('/yearly') ? '#2384C6' : 'white',
                                },
                                '&:hover': {
                                    backgroundColor: isActive('/yearly') ? '#ffffff' : 'inherit',
                                    '& .MuiListItemIcon-root': {
                                        color: '#ffffff',
                                    },
                                },
                                borderRadius: '5px',
                            }}
                        >
                            <ListItemText primary="Yearly" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                            {openYearlyMenu === 'yearly' ? <ExpandLess sx={{ color: 'white' }} /> : <ExpandMore sx={{ color:'white' }} />}
                        </ListItemButton>
                        {openYearlyMenu === 'yearly' && (
                            <Box sx={{ pl: 4 }}>
                                <ListItemButton
                                    sx={{
                                        '& .MuiListItemText-primary': {
                                            color: 'white',
                                        },
                                    }}
                                    onClick={() => handleNavigation('/close-yearly-period')}
                                >
                                    <ListItemText primary="Close Yearly Period" primaryTypographyProps={{ sx: { fontWeight: 600 } }} />
                                </ListItemButton>
                            </Box>
                        )}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    );
};

export default ClippedDrawer;
