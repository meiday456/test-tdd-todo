import {render, screen} from "@testing-library/react";
import TagLab from "@/src/component/lab/TagLab";

describe("Tag 테스트", () => {
  const setting = () => {
    const {container} = render(<TagLab />);
    return {container};
  };
  context("headding", () => {
    it("같은 이름의 h태그가 있을때 1레벨 찾기", () => {
      setting();
      const h1El = screen.getByRole("heading", {level: 1});
      expect(h1El).toBeInTheDocument();
      expect(h1El).toHaveTextContent("같은 이름의 제목");
    });
  });
  context("term", () => {
    it("dl check", () => {
      setting();
      const list = screen.getByRole("term");
      expect(list).toBeInTheDocument();
    });
  });
  context("list", () => {
    //dt의 경우 허용되는 aria role에 listitem이 있지만 테스트해보니
    //구분되어서 찾아진다.
    it("dt와 함께 li 들이 렌더링될때 element 수 check", () => {
      setting();
      const allListItem = screen.getAllByRole("listitem");
      expect(allListItem).toHaveLength(3);
    });
  });
});
