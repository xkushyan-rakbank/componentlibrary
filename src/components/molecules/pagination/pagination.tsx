import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button, Divider, MenuItem, Pagination, PaginationItem, Select, Stack, TextField, useTheme } from '@mui/material';
import React, { useCallback } from 'react';
import styled from 'styled-components';

import { Typography } from '@atoms/typography/typography';

type SizeProps = 'small' | 'medium';
const THEME_SIZE = {
  'small' : {
    FONT_PRIMARY: 12,
    STEP_PAGINATION_WIDTH: 296,
    PAGE_INPUT_WIDTH: 224,
    PAGE_AMOUNT_WIDTH: 224,
    PADDING: '8px 16px',
  },
  'medium': {
    FONT_PRIMARY: 14,
    STEP_PAGINATION_WIDTH: 296,
    PAGE_INPUT_WIDTH: 224,
    PAGE_AMOUNT_WIDTH: 224,
    PADDING: '8px 20px',
  },
}

const StyledPaginationItem = styled(PaginationItem)(({ theme }) => {
  const { palette } = theme;
  return ({
    '&.Mui-selected': {
      backgroundColor: palette.text.primary,
      color: palette.background.paper
    }
})});

const StyledStepPagination = styled('div')(({ theme }) => {
  const { palette, size } = theme;
  return ({
    width: THEME_SIZE[size].STEP_PAGINATION_WIDTH,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '.MuiButtonBase-root': {
      color: palette.text.primary,
      backgroundColor: palette.background.paper,
      borderColor: palette.text.primary,
      textTransform: 'initial',
    }
})});

const StyledPageInput = styled('div')(({ theme }) => {
  return ({
    width: THEME_SIZE[theme.size].PAGE_INPUT_WIDTH,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: THEME_SIZE[theme.size].FONT_PRIMARY,
    '.MuiInputBase-root': {
      width: 88,
      height: 40,
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.secondary,
    },
    '.MuiOutlinedInput-input': {
      paddingLeft: 8,
    },
    '.MuiButtonBase-root': {
      width: 42,
      minWidth: 40,
      height: 40,
      fontSize: 14,
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      borderColor: theme.palette.text.primary,
      borderRadius: 28,
      textTransform: 'initial',
      '&::placeholder': {
        color: theme.palette.text.secondary,
        textTransform: 'initial',
        opacity: 1,
      }
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: "none",
    }
})});

const StyledPageAmount = styled('div')(({ theme }) => {
  return ({
    width: THEME_SIZE[theme.size].PAGE_AMOUNT_WIDTH,
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: THEME_SIZE[theme.size].FONT_PRIMARY,
    '.MuiInputBase-root': {
      width: 72,
      height: 40,
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.background.secondary,
      cursor: 'pointer',
      padding: 0,
      '&::before': {
        border: 'none',
      },
      '&::after': {
        border: 'none',
      },
      '.MuiSelect-select': {
        height: '100%',
        display: 'flex',
        alignItems: 'center',
      }
    },
    '.MuiOutlinedInput-input': {
      paddingLeft: 8,
    },
    '.MuiOutlinedInput-notchedOutline': {
      border: "none",
    },
})});

export interface PaginationProps {
  count: number,
  defaultPage: number,
  itemsPerPage: number[],
  size?: SizeProps,
  disabled?: boolean,
  handleChange: (page: number) => void,
  handleChangeRowsPerPage: (pages: number) => void
}

const PaginationUI: React.FC<PaginationProps> = ({
  handleChange,
  handleChangeRowsPerPage,
  defaultPage,
  itemsPerPage,
  size = 'medium',
  ...props
}) => {
  const theme = useTheme();
  const [page, setPage] = React.useState(defaultPage);
  const [pageInput, setPageInput] = React.useState("");
  const [pageView, setPageView] = React.useState(itemsPerPage[1]);

  const handleChangePage = useCallback((value: number) => {
    setPage(value);
    handleChange(value);
  }, [page])

  const onChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<unknown> | null,
    newPage: number,
  ) => {
    if (newPage < 1 || newPage > props.count) {
      return
    } else {
      handleChangePage(newPage);
    }
  };

  const handleInputPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let currentValue = parseInt(event.target.value) || "";
    currentValue = +currentValue > props.count ? props.count : currentValue;
    setPageInput(currentValue.toString());
  };

  const handlePagesView = useCallback((
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPageView(+event.target.value);
    handleChangeRowsPerPage(+event.target.value);
  }, []);

  return (
    <Stack spacing={2} direction="row" useFlexGap flexWrap="wrap"
      divider={<Divider orientation="vertical" flexItem />}>
      <Pagination
        page={page}
        onChange={onChangePage}
        renderItem={(item) => {
          return (
          <StyledPaginationItem
            theme={{size, ...theme}}
            {...item}
            variant={(item.type === 'previous' || item.type === 'next') ? "outlined" : "text"}
          />
        )}}
        {...props}
      />
      <StyledPageInput theme={{size, ...theme}}>
        <Typography variant="body2">Go to page:</Typography>
        <TextField
          placeholder="Number"
          inputProps={{
            type: 'text',
            pattern: /^-?[0-9]*(?:\.[0-9]+)?$/
          }}
          value={pageInput}
          onChange={handleInputPage}
          />
          <Button
            type="button"
            variant="outlined"
            data-testid="pageInput-button"
            onClick={() => handleChangePage(+pageInput)}
          >Go</Button>
      </StyledPageInput>
      <StyledPageAmount theme={{size, ...theme}}>
        <Typography variant="body2">Results per page:</Typography>
        <Select
          variant="outlined"
          size={size}
          value={pageView.toString()}
          onChange={handlePagesView}
          {...props}>
          {
            itemsPerPage.map((amountItem) => (
              <MenuItem key={amountItem} value={amountItem}>{amountItem}</MenuItem>
            ))
          }
        </Select>
      </StyledPageAmount>
      <StyledStepPagination theme={{size, ...theme}}>
        <Button type="button" variant="outlined" startIcon={<ChevronLeft />} onClick={(e) => onChangePage(e, page - 1)} disabled={page === 1}>Prev</Button>
        <Typography variant="body2">Page: {page} of: {props.count}</Typography>
        <Button type="button" variant="outlined" endIcon={<ChevronRight />} onClick={(e) => onChangePage(e, page + 1)} disabled={page === props.count}>Next</Button>
      </StyledStepPagination>
    </Stack>
  );
}

export default PaginationUI;