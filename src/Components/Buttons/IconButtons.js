import React, { Fragment } from 'react'
import AddIcon from '@material-ui/icons/Add'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import {
  Typography,
  Menu,
  ListItem,
  IconButton,
  ListItemIcon,
  Tooltip
} from '@material-ui/core'
import MuiDialogTitle from '@material-ui/core/DialogTitle'
import CloseIcon from '@material-ui/icons/Close'
import { v4 as uuidv4 } from 'uuid'
import { Col } from 'reactstrap'
import CreateIcon from '@material-ui/icons/Create'
import ClearIcon from '@material-ui/icons/Clear'

export function AddTab ({ operationName, handleClick, className }) {
  return (
    <ListItem
      className={className}
      button
      key='CreateIssue'
      onClick={handleClick}
    >
      <AddIcon className={className + '-icon'} />
      <Typography variant='subtitle2' gutterBottom>
        {operationName}
      </Typography>
    </ListItem>
  )
}

export function ProjectHeaderTab ({ title, subtite, imgSrc }) {
  return (
    <Fragment>
      <Col sm='5'>
        <img className='item-left drawer-img' alt='project' src={imgSrc} />
      </Col>
      <Col sm='7'>
        <Typography variant='subtitle1' gutterBottom>
          {title}
        </Typography>
        <Typography variant='caption' display='block' gutterBottom>
          {subtite}
        </Typography>
      </Col>
    </Fragment>
  )
}

export function DotIconMenu ({
  className,
  anchorEl,
  isOpen,
  anchorRef,
  handleMenuClose,
  handleMenuOpen,
  ...props
}) {
  return (
    <div className={className}>
      <IconButton
        ref={anchorRef}
        size='small'
        aria-controls={isOpen ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleMenuOpen}
      >
        <MoreHorizIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isOpen}
        onClose={handleMenuClose}
      >
        {props.children}
      </Menu>
    </div>
  )
}

export function DialogCloseIcon ({ handleClose }) {
  return (
    <MuiDialogTitle disableTypography className='title'>
      <IconButton
        aria-label='close'
        className='close-btn'
        onClick={handleClose}
      >
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
  )
}

export const DropDownMenu = ({
  anchorEl,
  isOpen,
  handleMenuClose,
  children
}) => (
  <Menu
    anchorEl={anchorEl}
    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    id={uuidv4()}
    keepMounted
    transformOrigin={{ vertical: 'top', horizontal: 'right' }}
    open={isOpen}
    onClose={handleMenuClose}
  >
    {children}
  </Menu>
)

export const TableEditIconButton = ({ onClick }) => (
  <td align='center'>
    <IconButton edge='end' aria-label='edit' onClick={onClick}>
      <CreateIcon />
    </IconButton>
  </td>
)

export const TableDeleteIconButton = ({ onClick }) => (
  <td>
    <IconButton edge='end' aria-label='delete' onClick={onClick}>
      <ClearIcon />
    </IconButton>
  </td>
)

export const DropDownListIconButton = ({ title, handleClick, children }) => (
  <Tooltip title={title} aria-label={title}>
    <ListItemIcon onClick={handleClick}>
      <IconButton edge='end' aria-label={title}>
        {children}
      </IconButton>
    </ListItemIcon>
  </Tooltip>
)
