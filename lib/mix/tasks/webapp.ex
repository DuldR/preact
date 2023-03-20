defmodule Mix.Tasks.Webapp do
  @moduledoc """
  React Frontend compilation and bundling for production
  """

  use Mix.Task

  require Logger

  @public_path "./priv/static/webapp"

  @shortdoc "Compile and bundle react frontend"

  def run(_) do
    Logger.info("Installing NPM packages")
    System.cmd("npm", ["install", "--quiet"], cd: "./frontend")

    Logger.info("Compiling React frontend")
    System.cmd("npm", ["run", "build"], cd: "./frontend")

    Logger.info("Moving dist folder at #{@public_path}")
    System.cmd("rm", ["-rf", @public_path])
    System.cmd("cp", ["-R", "./frontend/dist", @public_path])

    Logger.info("React ready")
  end
end
