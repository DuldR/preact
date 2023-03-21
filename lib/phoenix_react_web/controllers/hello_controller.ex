defmodule PhoenixReactWeb.HelloController do
  use PhoenixReactWeb, :controller

  def index(conn, _) do
    json_resp = %{
      1 => "We are the bulldogs",
      2 => "OK",
      3 => "I got my tooth removed"
    }

    json(conn, json_resp)
  end
end
