defmodule BinarySearch do
  @moduledoc """
  My binary search module.
  """

  @doc """
  Binary search.

  Returns the index of the target in the list, or -1 if not found.

  ## Examples

      iex> BinarySearch.bs([1, 2, 3, 4, 5], 3)
      2

  """
  @spec bs([integer], integer) :: integer
  def bs(list, target) do
    bs(list, target, 0, length(list) - 1)
  end

  defp bs(list, target, low, high) do
    if low > high do
      -1
    else
      mid = div(low + high, 2)

      case Enum.at(list, mid) do
        x when x > target -> bs(list, target, low, mid - 1)
        x when x < target -> bs(list, target, mid + 1, high)
        _target -> mid
      end
    end
  end
end
