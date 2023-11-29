defmodule ExBenkyouTest do
  use ExUnit.Case
  doctest ExBenkyou
  doctest BinarySearch

  test "greets the world" do
    assert ExBenkyou.hello() == :world
  end
end
