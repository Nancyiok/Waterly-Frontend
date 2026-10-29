import ReactPaginateModule from "react-paginate";
import classNames from "classnames";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import { useSearchParamsManager } from "@/hooks/useSearchParamsManager";

const ReactPaginate =
  (ReactPaginateModule as unknown as { default: typeof ReactPaginateModule }).default ??
  ReactPaginateModule;

type Props = {
  total: number;
  limit: number;
  pageRangeDisplayed?: number;
  marginPagesDisplayed?: number;
  className?: string;
};

const itemLayout = "size-8 grid place-items-center rounded-full";
const itemTypography = "font-medium";
const itemTransition = "transition-all duration-200 ease-out";
const itemInteraction = "cursor-pointer select-none";
const itemFocus =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary";

const itemClass = `${itemLayout} ${itemTypography} ${itemTransition} ${itemInteraction} ${itemFocus}`;

const pageClass = `${itemClass} text-neutral-700 hover:bg-primary-foam`;
const activePageClass = "bg-primary! text-white! hover:bg-primary-light!";
const arrowClass = `${itemClass} text-primary-dark bg-white shadow-sm hover:bg-primary-foam`;
const disabledClass = "opacity-50 *:cursor-not-allowed *:hover:bg-white";
const breakClass = `${itemClass} text-neutral-400 cursor-default`;

export const Pagination = ({
  total,
  limit,
  pageRangeDisplayed = 3,
  marginPagesDisplayed = 1,
  className,
}: Props) => {
  const { params, setParams } = useSearchParamsManager();
  const currentPage = Number(params.page) || 0;
  const pageCount = Math.ceil(total / limit);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setParams({ page: selected });
  };

  useEffect(() => {
    if (pageCount > 0 && currentPage >= pageCount) {
      setParams({ page: pageCount - 1 });
    }
  }, [currentPage, pageCount, setParams]);

  if (pageCount <= 1) return null;

  return (
    <ReactPaginate
      pageCount={pageCount}
      forcePage={currentPage}
      onPageChange={handlePageClick}
      pageRangeDisplayed={pageRangeDisplayed}
      marginPagesDisplayed={marginPagesDisplayed}
      breakLabel="..."
      previousLabel={<Icon icon="mdi:chevron-left" className="size-5" />}
      nextLabel={<Icon icon="mdi:chevron-right" className="size-5" />}
      containerClassName={classNames(
        "flex items-center justify-center gap-2",
        className,
      )}
      pageLinkClassName={pageClass}
      activeLinkClassName={activePageClass}
      previousLinkClassName={arrowClass}
      nextLinkClassName={arrowClass}
      disabledClassName={disabledClass}
      breakLinkClassName={breakClass}
      renderOnZeroPageCount={null}
    />
  );
};
